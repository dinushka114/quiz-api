import { UserCreateDto } from './../dtos/user-create.dto';
import { USER_PROVIDER } from './../constants';
import { User } from './../models/user.model';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
    constructor(
        @Inject(USER_PROVIDER) private user:Model<User>,
        private auth:AuthService
    ){}

    async singUp(user:UserCreateDto){

        const found = await this.user.findOne({email:user.email});
        // return found;

        if(!found){
            const hashedPassword = await this.auth.hashingPassword(user.password);
    
            const newUser = new this.user({
                email: user.email,
                password: hashedPassword
            })

            await newUser.save();

            return {
                msg:`${user.email} is registerd sucessfully`
            };

            // return "user not exists";
        }

        return {
            msg:`${user.email} is already exists!!`
        }
        

        
    }

}
