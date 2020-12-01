import { JwtStrategyService } from './auth/jwt-strategy/jwt-strategy.service';
import { jwtConstant } from './../constants';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './users.providers';
import { AuthService } from 'src/users/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports:[DatabaseModule , JwtModule.register({secret:jwtConstant.secret})],
    controllers:[UsersController],
    providers:[UsersService,
        AuthService ,
        JwtStrategyService,
         ...userProviders],
    exports:[UsersService]
})
export class UsersModule {}
