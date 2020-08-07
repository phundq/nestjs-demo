import { UserUpdateRequestDto } from './../common/dto/request/UserUpdateRequestDto';
import { UsersService } from './users.service';
import { UserCreateRequestDto } from '../common/dto/request/UserCreateRequestDto';
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService){
    }

    @Get('')
    findAll(){
        return this.usersService.findAll();
    }

    @Get('/:id')
    findByUserId(@Param() params){
        return this.usersService.findById(params.id);
    }

    @Post('')
    createUser(@Body() userCreateRequestDto: UserCreateRequestDto){
        return this.usersService.create(userCreateRequestDto);
    }

    @Put('')
    updateUser(@Body() userUpdateRequestDto: UserUpdateRequestDto){
        return this.usersService.update(userUpdateRequestDto);
    }

    @Delete('/:id')
    deleteUser(@Param() params){
        return this.usersService.delete(params.id);
    }
    
}
