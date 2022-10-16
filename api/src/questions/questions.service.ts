import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  create(createQuestionDto: CreateQuestionDto) {
    return this.prisma.question.create({data: createQuestionDto});
  }

  findAll() {
    return this.prisma.question.findMany({
      //include é utilizado para fazer buscas em mais de uma tabela
      include: {
        type: {},
        user: {}
      }
    });
  }

  findOne(id: number) {
    return this.prisma.question.findUnique({ where: { id } });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.prisma.question.update({
      where: { id },
      data: updateQuestionDto,
      });
  }

  remove(id: number) {
    return this.prisma.question.delete({ where: { id } });
  }
}
