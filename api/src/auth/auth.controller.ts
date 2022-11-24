import {
    Body,
    Controller,
    Post,
} from '@nestjs/common';
import { AuthService } from "./auth.service";
import { LoginUserDto } from "src/users/dto/login-user.dto";
import { ApiTags } from "@nestjs/swagger";



@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @Post('login')
    public async login(@Body() loginUserDto: LoginUserDto):
        Promise<any> {
        return await this.authService.login(loginUserDto);
    }

}