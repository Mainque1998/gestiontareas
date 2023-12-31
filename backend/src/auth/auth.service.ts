import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
    ){}

    async register(registerDto: RegisterDto){
        if( await this.userService.findOneByEmail(registerDto.email) )
            throw new BadRequestException('User already exists');

        return await this.userService.create({
            name: registerDto.name,
            email: registerDto.email,
            password: await bcrypt.hash(registerDto.password, 10)
        });
    }

    async login(loginDto: LoginDto){
        const user = await this.userService.findOneByEmail(loginDto.email);
        if(!user)
            throw new UnauthorizedException('Email is wrong');

        if (!await bcrypt.compare(loginDto.password, user.password))
            throw new UnauthorizedException('Password is wrong');

        const payload = { email: user.email};

        const token = await this.jwtService.signAsync(payload);

        return token;
    }
}
