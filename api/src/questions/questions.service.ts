import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) { }

  async create(createQuestionDto: CreateQuestionDto) {
    const DtoReturn = new CreateQuestionDto()
    const question = await this.prisma.questions.create({
      data:
      {
        question: createQuestionDto.question,
        userId: createQuestionDto.userId
      }
    });
    const questiontags = await this.prisma.questiontags.create({
      data: {
        questionId: question.id,
        tagId: createQuestionDto.tagId,
      }
    })
    DtoReturn.question = question.question;
    DtoReturn.resolved = false;
    DtoReturn.tagId = createQuestionDto.tagId;
    DtoReturn.userId = question.userId
    return DtoReturn;
  }

  async findAll() {
    const questions = await this.prisma.questions.findMany({
      //include é utilizado para fazer buscas em mais de uma tabela
      include: {
        user: {
          select: {
            name: true
          }
        },
        Questiontags: {
          take: 1,
          include: {
            tag: {
              include: {
                type: {
                  select: {
                    name: true
                  }
                }
              }
            }
          }
        }
      }, orderBy: {
        creatAt: 'desc'
      },
    });
    const quests = questions.map(({ user: { name: user }, id,
      question, creatAt, resolved,
      Questiontags: [{ tag: { type: { name: typeName } } }] }) =>
      ({ id, user, question, resolved, creatAt, typeName }));
    return quests
  }

  async findOne(id: number) {
    return this.prisma.questions.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        },
        Midias: {
          select: {
            url: true
          }
        },
        Answer: {
          include: {
            user: {
              select: {
                id: true,
                name: true
              }
            },
            Midias: {
              select: {
                url: true
              }
            },
          },
          orderBy: [
            { best: 'desc' },
            { avaliation: 'desc' }
          ],
        }
      }
    });
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.prisma.questions.update({
      where: { id },
      data: updateQuestionDto,
    });
  }

  async solved(id: number) {
    const question = await this.findOne(id)
    if (question) {
      if (question.resolved) {
        return this.prisma.questions.update({
          where: { id },
          data: {
            resolved: false
          }
        });
      }
      else {
        return this.prisma.questions.update({
          where: { id },
          data: {
            resolved: true
          }
        });
      }
    }
    else{
      throw new BadRequestException('Question não existe')
    }
  }

  async remove(id: number) {
    return this.prisma.questions.delete({ where: { id } });
  }
}
