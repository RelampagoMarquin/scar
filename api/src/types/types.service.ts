import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';

@Injectable()
export class TypesService {
  constructor(private prisma: PrismaService) {}

  async create(createTypeDto: CreateTypeDto) {
    return this.prisma.types.create({data: createTypeDto});
  }

  async findAll() {
    return this.prisma.types.findMany();
  }

  async findOne(id: number) {
    return this.prisma.types.findUnique({ where: { id } });
  }

  async update(id: number, updateTypeDto: UpdateTypeDto) {
    return this.prisma.types.update({
      where: { id },
      data: updateTypeDto,
      });
  }

  async remove(id: number) {
    return this.prisma.types.delete({ where: { id } });
  }
}
