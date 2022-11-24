import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

interface FormatLogin extends Partial<UserEntity> {
  registration: string
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      select: {
        name: true,
        registration: true,
        class: true,
        email: true
      },
      data: createUserDto
    });
  }

  findAll() {
    return this.prisma.users.findMany({
      select: {
        name: true,
        registration: true,
        class: true,
        email: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      select: {
        name: true,
        registration: true,
        class: true,
        email: true
      },
      where: { id }
    })
  }

  findByResistration(registration: string) {
    return this.prisma.users.findUnique({
      where: { registration }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      select: {
        name: true,
        registration: true,
        class: true,
        email: true
      },
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      select: {
        name: true,
        registration: true,
        class: true,
        email: true
      },
      where: { id }
    });
  }

  //use by auth module to login user
  async findByLogin({ registration, password }: LoginUserDto):
    Promise<FormatLogin> {
    const user = await this.prisma.users.findFirst({
      where: { registration }
    });

    if (!user) {
      throw new HttpException("invalid_credentials",
        HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await compare(password, user.password);

    if (!areEqual) {
      throw new HttpException("invalid_credentials",
        HttpStatus.UNAUTHORIZED);
    }

    const { password: p, ...rest } = user;
    return rest;
  }

  //use by auth module to get user in database
  async findByPayload({ registration }: any): Promise<any> {
    return await this.prisma.users.findFirst({
      where: { registration }
    });
  }
}
