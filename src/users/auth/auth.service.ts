import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { SALT_ROUNDS } from "src/constants";

@Injectable()
export class AuthService{
    async hashingPassword(password:String):Promise<String>{
        return bcrypt.hash(password , SALT_ROUNDS);
    }

    async comparePassword(password:string , hashedPassword:string):Promise<boolean>{
        return bcrypt.compare(password , hashedPassword);
    }

}