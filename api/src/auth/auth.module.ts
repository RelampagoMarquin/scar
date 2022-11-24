import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import { jwtConstants } from './constants';
//import { LocalStrategy } from './local.strategy';

@Module({
  imports:[PrismaModule, UsersModule, PassportModule,
    PassportModule.register({
    defaultStrategy: 'jwt',
    property: 'user',
    session: false,
  }),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: {
      expiresIn: jwtConstants.expiresIn
    },
  }),],
  providers: [AuthService, UsersService, JwtStrategy, PrismaService, AuthService, //LocalStrategy
],
  exports: [
    PassportModule,
    JwtModule,
    AuthService
  ],
})
export class AuthModule {}
