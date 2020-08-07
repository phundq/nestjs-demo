import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/common/entity/user.entity';
import { UsersController } from './users.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User]), UsersModule],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
