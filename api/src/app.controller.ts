import { Controller, Request, Post, Body, UseGuards, Get, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LoginUserDto } from './users/dto/login-user.dto';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ApiSecurity } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authService: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('me')
  async login(@Request() req) {
    return this.authService.validateUser(req.user);
  }

  @Post('login')
    public async logon(@Body() loginUserDto: LoginUserDto):
        Promise<any> {
        return await this.authService.login(loginUserDto);
    }

}
