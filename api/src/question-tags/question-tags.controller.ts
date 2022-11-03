import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionTagsService } from './question-tags.service';
import { CreateQuestionTagDto } from './dto/create-question-tag.dto';
import { UpdateQuestionTagDto } from './dto/update-question-tag.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QuestionTagEntity } from './entities/question-tag.entity';

@Controller('question-tags')
@ApiTags('questionTags')
export class QuestionTagsController {
  constructor(private readonly questionTagsService: QuestionTagsService) {}

  @Post()
  @ApiCreatedResponse({type: QuestionTagEntity})
  create(@Body() createQuestionTagDto: CreateQuestionTagDto) {
    return this.questionTagsService.create(createQuestionTagDto);
  }

  @Get()
  @ApiOkResponse({type: QuestionTagEntity, isArray: true})
  findAll() {
    return this.questionTagsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: QuestionTagEntity})
  findOne(@Param('id') id: string) {
    return this.questionTagsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type: QuestionTagEntity})
  update(@Param('id') id: string, @Body() updateQuestionTagDto: UpdateQuestionTagDto) {
    return this.questionTagsService.update(+id, updateQuestionTagDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: QuestionTagEntity})
  remove(@Param('id') id: string) {
    return this.questionTagsService.remove(+id);
  }
}
