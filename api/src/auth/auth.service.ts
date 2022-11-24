import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from "src/users/dto/login-user.dto";
import { JwtPayload } from "./strategies/jwt.strategy";
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) { }
  /* async validateUser(registration: string, pass: string): Promise<any> {
      const user = await this.usersService.findByResistration(registration);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } */

  async validateUser(payload: JwtPayload): Promise<any> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException("INVALID_TOKEN",
        HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ registration }): any {
    const user: JwtPayload = { registration };
    const Authorization = this.jwtService.sign(user);
    return {
      expiresIn: process.env.EXPIRESIN,
      Authorization,
    };
  }

  async login(loginUserDto: LoginUserDto): Promise<any> {
    // find user in db
    const user = await
      this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);

    return {
      ...token,
      data: user
    };
  }

  /* async login(user: any) {
      const payload = { username: user.username, sub: user.userId };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } */
}

export interface RegistrationStatus {
  success: boolean;
  message: string;
  data?: UserEntity;
}

export interface RegistrationSeederStatus {
  success: boolean;
  message: string;
  data?: UserEntity[];
}
