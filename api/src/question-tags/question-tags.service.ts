import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionTagDto } from './dto/create-question-tag.dto';
import { UpdateQuestionTagDto } from './dto/update-question-tag.dto';

@Injectable()
export class QuestionTagsService {
  constructor(private prisma: PrismaService) {}

  create(createQuestionTagDto: CreateQuestionTagDto) {

    return this.prisma.questiontags.create({data: createQuestionTagDto})
  }

  findAll() {
    return this.prisma.questiontags.findMany();
  }

  findOne(id: number) {
    return this.prisma.questiontags.findUnique({ where: { id }});
  }

  update(id: number, updateQuestionTagDto: UpdateQuestionTagDto) {
    return this.prisma.questiontags.update({
      where: { id },
      data: updateQuestionTagDto,
    })
  }

  remove(id: number) {
    return this.prisma.questiontags.delete({ where: { id } })
  }
}
