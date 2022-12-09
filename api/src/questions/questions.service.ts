import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  async create(createQuestionDto: CreateQuestionDto) {
    return this.prisma.questions.create({data: createQuestionDto});
  }

  async findAll() {
    return this.prisma.questions.findMany({
      //include é utilizado para fazer buscas em mais de uma tabela
      include: {
        user: {}
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.questions.findUnique({ where: { id } });
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.prisma.questions.update({
      where: { id },
      data: updateQuestionDto,
      });
  }

  async remove(id: number) {
    return this.prisma.questions.delete({ where: { id } });
  }
}
