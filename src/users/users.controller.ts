import { UserCreateDto } from './../dtos/user-create.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(
        private user:UsersService
    ){}

    @Post()
    async signUp(
        @Body() userDto:UserCreateDto
    ){
        return this.user.singUp(userDto);
    }
}
