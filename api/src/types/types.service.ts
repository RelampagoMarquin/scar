import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';

@Injectable()
export class TypesService {
  constructor(private prisma: PrismaService) {}

  create(createTypeDto: CreateTypeDto) {
    return this.prisma.type.create({data: createTypeDto});
  }

  findAll() {
    return this.prisma.type.findMany();
  }

  findOne(id: number) {
    return this.prisma.type.findUnique({ where: { id } });
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return this.prisma.type.update({
      where: { id },
      data: updateTypeDto,
      });
  }

  remove(id: number) {
    return this.prisma.type.delete({ where: { id } });
  }
}
