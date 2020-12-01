import { UsersService } from './../../users.service';
import { jwtConstant } from './../../../constants';
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy){
    constructor(
        private userService:UsersService
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExiration:false,
            secretOrKey:jwtConstant.secret
        });
    }

    async validate(payload:any) {
        const isValidated =  await this.userService.validateUserById(payload.id);
        if(isValidated){
            return {
                id:payload.id,
                email:payload.email
            }
        }else{
            return "Error"
        }
    }

}