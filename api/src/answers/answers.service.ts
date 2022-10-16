import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Injectable()
export class AnswersService {
  constructor(private prisma: PrismaService) {}

  create(createAnswerDto: CreateAnswerDto) {
    return this.prisma.answer.create({data: createAnswerDto})
  }

  findAll() {
    return this.prisma.answer.findMany();
  }

  findOne(id: number) {
    return this.prisma.answer.findUnique({
      where: { id },
      include: {
        question: {}
      }
    });
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.prisma.answer.update({
      where: {id},
      data: updateAnswerDto,
    });
  }

  remove(id: number) {
    return this.prisma.answer.delete({ where: {id}});
  }
}
