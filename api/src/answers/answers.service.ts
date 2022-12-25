import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Injectable()
export class AnswersService {
  constructor(private prisma: PrismaService) {}

  async create(createAnswerDto: CreateAnswerDto) {
    return this.prisma.answers.create({data: createAnswerDto})
  }

  async findAll() {
    return this.prisma.answers.findMany();
  }

  async findAllByQuestion(questionId: number) {
    return this.prisma.answers.findMany({
      where: {questionId},
      include: {
        Midias: {}
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.answers.findUnique({
      where: { id },
      include: {
        question: {}
      }
    });
  }

  async update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.prisma.answers.update({
      where: {id},
      data: updateAnswerDto,
    });
  }

  async remove(id: number) {
    return this.prisma.answers.delete({ where: {id}});
  }
}
