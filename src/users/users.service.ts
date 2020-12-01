import { UserCreateDto, LoginUserDto } from './../dtos/user-create.dto';
import { USER_PROVIDER } from './../constants';
import { User } from './../models/user.model';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuthService } from 'src/users/auth/auth.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UsersService {
    constructor(
        @Inject(USER_PROVIDER) private user:Model<User>,
        private auth:AuthService,
        private jwt:JwtService
    ){}

    async singUp(user:UserCreateDto){

        const found = await this.user.findOne({email:user.email});
        // return found;

        if(!found){
            const hashedPassword = await this.auth.hashingPassword(user.password);
    
            const newUser = new this.user({
                firstName:user.firstName,
                lastName:user.lastName,
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

    async login(logUser:LoginUserDto){
        const found = await this.user.findOne({email:logUser.email});

        if(!found){
            throw new UnauthorizedException(`${logUser.email} not found`)
        }

        const userFound = await this.auth.comparePassword(logUser.password , found.password);

        if(userFound){
            const token  = await this.jwt.signAsync(
                {email:found.email, id:found.id} , {expiresIn:'120s'})
            return {
                token:token
            }
        }else{
            throw new UnauthorizedException("invalid password");
        }

    }

    async validateUserById(userId:String){
        const user = await this.user.findById(userId);

        if(user){
            return true
        }else{
            return false
        }
    }

}
