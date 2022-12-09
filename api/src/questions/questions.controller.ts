import {
   Controller, 
   Get, 
   Post, 
   Body, 
   Patch, 
   Param, 
   Delete, 
   BadRequestException,
 } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { 
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags 
} from '@nestjs/swagger';
import { QuestionEntity } from './entities/question.entity';
import { yupCreateQuestionInput } from 'src/yup/questions';

@Controller('questions')
@ApiTags('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

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

  @Delete(':id')
  @ApiOkResponse({ type: QuestionEntity})
  async remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}
