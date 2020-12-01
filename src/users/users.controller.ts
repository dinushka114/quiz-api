import { UserCreateDto, LoginUserDto } from './../dtos/user-create.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
    constructor(
        private user:UsersService
    ){}

    @Post('signup')
    async signUp(
        @Body() userDto:UserCreateDto
    ){
        return this.user.singUp(userDto);
    }

    @Post('login')
    async login(
        @Body() logUser:LoginUserDto
    ){
        return this.user.login(logUser);
    }

    
    @Get('profile')
    @UseGuards(AuthGuard('jwt'))
    async profile(
        @Request() req
    ){
        return req.user;
    }
}
