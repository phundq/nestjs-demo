import { UserUpdateRequestDto } from './../common/dto/request/UserUpdateRequestDto';
import { UserCreateRequestDto } from './../common/dto/request/UserCreateRequestDto';
import { User } from '../common/entity/user.entity';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ){ }

    async findAll(): Promise<User[]>{
        return await this.usersRepository.find();
    }

    async findById(id: number): Promise<User>{
        return await this.usersRepository.findOne(id);
    }

    async create(payload: UserCreateRequestDto){
        console.log(payload)
        let newUser: User = {
            id: null,
            userName: payload.userName,
            fullName : payload.fullName,
            password: payload.password,
            created: new Date,
            modified: new Date
        };

        return await this.usersRepository.save(newUser);
    }

    async update(payload: UserUpdateRequestDto){
        console.log(payload);
        let userUpdate: User;
        try{
            userUpdate = await this.usersRepository.findOne(payload.id)
        }
        catch(err){
            throw new BadRequestException(err.detail);
        };
       
        if(payload.fullName){
            userUpdate.fullName = payload.fullName;
        }
        if(payload.password){
            userUpdate.password = payload.password;
        }
        return await this.usersRepository.update(userUpdate.id, userUpdate);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.usersRepository.delete(id);
      }
}