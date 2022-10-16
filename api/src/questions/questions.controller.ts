import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { 
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags 
} from '@nestjs/swagger';
import { QuestionEntity } from './entities/question.entity';

@Controller('questions')
@ApiTags('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  @ApiCreatedResponse({ type: QuestionEntity})
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  @ApiOkResponse({ type: QuestionEntity, isArray: true})
  findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: QuestionEntity})
  findOne(@Param('id') id: string) {
    return this.questionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: QuestionEntity})
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: QuestionEntity})
  remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}
