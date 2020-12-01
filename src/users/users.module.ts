import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './users.providers';

@Module({
    imports:[DatabaseModule],
    controllers:[UsersController],
    providers:[UsersService , ...userProviders],
    exports:[]
})
export class UsersModule {}
