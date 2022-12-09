import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async create(createTagDto: CreateTagDto) {
    return this.prisma.tags.create({data: createTagDto});
  }

  async findAll() {
    return this.prisma.tags.findMany();
  }

  async findOne(id: number) {
    return this.prisma.tags.findUnique({where: { id }});
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    return this.prisma.tags.update({
      where: { id },
      data: updateTagDto,
    })
  }

  async remove(id: number) {
    return this.prisma.tags.delete({ where: { id } })
  }
}
