import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { UpdateMidiaDto } from './dto/update-midia.dto';

@Injectable()
export class MidiasService {
  constructor(private prisma: PrismaService) {}

  async create(createMidiaDto: CreateMidiaDto) {
    return this.prisma.midias.create({data: createMidiaDto});
  }

  async findAll() {
    return this.prisma.midias.findMany();
  }

  async findOne(id: number) {
    return this.prisma.midias.findUnique({ where: { id } });
  }

  async update(id: number, updateMidiaDto: UpdateMidiaDto) {
    return this.prisma.midias.update({
      where: { id },
      data: updateMidiaDto,
    })
  }

  async remove(id: number) {
    return this.prisma.midias.delete({ where: { id }})
  }
}
