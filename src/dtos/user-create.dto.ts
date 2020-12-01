import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserCreateDto{

    @IsNotEmpty()
    firstName:string;

    @IsNotEmpty()
    lastName:string;

    @IsEmail()
    email:string;

    @IsNotEmpty()
    @MinLength(8, {
        message: "password is too short"
    })
    password:string;
}

export class LoginUserDto{
    email:string;
    password:string;
}