import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  create(createTagDto: CreateTagDto) {
    return this.prisma.tags.create({data: createTagDto});
  }

  findAll() {
    return this.prisma.tags.findMany();
  }

  findOne(id: number) {
    return this.prisma.tags.findUnique({where: { id }});
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.prisma.tags.update({
      where: { id },
      data: updateTagDto,
    })
  }

  remove(id: number) {
    return this.prisma.tags.delete({ where: { id } })
  }
}
