import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
  InternalServerErrorException,
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
import { 
  PasswordCheckService, 
  PasswordCheckStrength 
} from '../utils/passwordcheck';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() createUserDto: CreateUserDto) {   
    const pass = createUserDto.password 
    const check = new PasswordCheckService().checkPasswordStrength(pass)

    if(check === PasswordCheckStrength.Ok || check === PasswordCheckStrength.Strong){
      const saltOrRounds = 10;
      const password = await bcrypt.hash(pass, saltOrRounds)
      createUserDto.password = password
    }else{
      throw new BadRequestException('Senha fraca')
    }
    
    if (!createUserDto.email.includes('ifrn.edu.br')){
      throw new BadRequestException('Email não pertence ao dominio do IFRN')
    }

    if(!(/^\d+$/.test(createUserDto.registration))){
      throw new BadRequestException('Matricula invalida')
    }

    // utiliza o yup para validar os dados
    const isValidInput = yupCreateUserInput.isValidSync(createUserDto)

    if (!isValidInput) {
      throw new BadRequestException('Seu input está inválido')
    }

    const emailRegistred = await this.usersService.findByEmail(createUserDto.email)
    const registrationResistred = await this.usersService.findByResistration(createUserDto.registration)
    if(emailRegistred){
      throw new ConflictException('Email já cadastrado')
    }
    if(registrationResistred){
      throw new ConflictException('Matricula já cadastrada')
    }

    try {
      return this.usersService.create(createUserDto);
    } catch (error) {
      throw new InternalServerErrorException();
    }
    
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id') id: string) {
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
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

}
