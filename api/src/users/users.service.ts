import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ 
      select: { 
        name: true,
        registration: true,
        class: true,
        email: true
      },
      data: createUserDto });
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
      where: { id } })
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
       where: { id } });
  }
}
