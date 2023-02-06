import {
   Controller, 
   Get, 
   Post, 
   Body, 
   Patch, 
   Param, 
   Delete, 
   BadRequestException,
   UseGuards,
   UseInterceptors,
   ClassSerializerInterceptor,
 } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { 
  ApiCreatedResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags 
} from '@nestjs/swagger';
import { QuestionEntity } from './entities/question.entity';
import { yupCreateQuestionInput } from 'src/yup/questions';
import { AnswerEntity } from 'src/answers/entities/answer.entity';
import { AnswersService } from 'src/answers/answers.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiSecurity('access-key')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('questions')
@ApiTags('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService, 
    private readonly answersService: AnswersService) {}

  @Post()
  @ApiCreatedResponse({ type: QuestionEntity})
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    const isValidInput = yupCreateQuestionInput.isValidSync(createQuestionDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }

    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  @ApiOkResponse({ type: QuestionEntity, isArray: true})
  async findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: QuestionEntity})
  async findOne(@Param('id') id: string) {
    return this.questionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: QuestionEntity})
  async update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    const isValidInput = yupCreateQuestionInput.isValidSync(updateQuestionDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }

    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Patch('solved/:id')
  @ApiOkResponse({ type: QuestionEntity})
  async solved(@Param('id') id: string) {
    return this.questionsService.solved(+id);
  }

  @Delete(':id')
  @ApiOkResponse({ type: QuestionEntity})
  async remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }

  @Get(":id/answers")
  @ApiOkResponse({ type: AnswerEntity, isArray: true})
  async findAllByQuestion(@Param('id') id: string) {
    return this.answersService.findAllByQuestion(+id);
  }
}
