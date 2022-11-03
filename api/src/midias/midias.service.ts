import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { UpdateMidiaDto } from './dto/update-midia.dto';

@Injectable()
export class MidiasService {
  constructor(private prisma: PrismaService) {}

  create(createMidiaDto: CreateMidiaDto) {
    return this.prisma.midias.create({data: createMidiaDto});
  }

  findAll() {
    return this.prisma.midias.findMany();
  }

  findOne(id: number) {
    return this.prisma.midias.findUnique({ where: { id } });
  }

  update(id: number, updateMidiaDto: UpdateMidiaDto) {
    return this.prisma.midias.update({
      where: { id },
      data: updateMidiaDto,
    })
  }

  remove(id: number) {
    return this.prisma.midias.delete({ where: { id }})
  }
}
