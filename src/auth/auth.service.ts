import { JwtAuthGuard } from './jwt-auth.guard';
import { jwtConstants } from './constants';
import { ExtractJwt } from 'passport-jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from './../users/users.service';
import { Injectable, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {

    }

    async validateUser(userName: string, pass: string): Promise<any> {
        const user = await this.usersService.findUser(userName);
        console.log(user);
        if (user && user.password === pass) {
          const { password, ...result } = user;
            console.log(result);
            
          return result;
        }
        return null;
      }

    async createJWTToken(user: any) {
        const payload = { username: user.userName, sub: user.id };
        console.log(user);
        return {
            accessToken: this.jwtService.sign(payload, { expiresIn: jwtConstants.expiresIn}),
            expiresIn: jwtConstants.expiresIn,
            timeCreated: new Date()
        };
    }
    
    
    
}
