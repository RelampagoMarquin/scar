import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { yupCreateUserInput } from 'src/yup/users';
import { UserEntity } from './entities/user.entity';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() createUserDto: CreateUserDto) {
    const user = new UserEntity
    const saltOrRounds = 10;
    const password = await bcrypt.hash(createUserDto.password, saltOrRounds)
    user.email = createUserDto.email
    createUserDto.password = password

    // utiliza o yup para validar os dados
    const isValidInput = yupCreateUserInput.isValidSync(createUserDto)

    if (!isValidInput) {
      throw new BadRequestException('Seu input está inválido')
    }

    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //precisa ser corrigido pois o json esta enviando a senha normal, só criptografá quando salva
    const saltOrRounds = 10;
    const password = await bcrypt.hash(updateUserDto.password, saltOrRounds)
    updateUserDto.password = password

    const isValidInput = yupCreateUserInput.isValidSync(updateUserDto)

    if (!isValidInput) {
      throw new BadRequestException('Seu input está inválido')
    }

    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

}
