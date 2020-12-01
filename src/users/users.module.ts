import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './users.providers';
import { AuthService } from 'src/auth/auth.service';

@Module({
    imports:[DatabaseModule],
    controllers:[UsersController],
    providers:[UsersService,
        AuthService ,
         ...userProviders],
    exports:[UsersService]
})
export class UsersModule {}
