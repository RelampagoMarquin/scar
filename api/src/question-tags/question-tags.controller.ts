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
import { QuestionTagsService } from './question-tags.service';
import { CreateQuestionTagDto } from './dto/create-question-tag.dto';
import { UpdateQuestionTagDto } from './dto/update-question-tag.dto';
import { 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiSecurity, 
  ApiTags 
} from '@nestjs/swagger';
import { QuestionTagEntity } from './entities/question-tag.entity';
import { yupCreateQuestionTagsInput } from 'src/yup/questionTags';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@ApiSecurity('access-key')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('question-tags')
@ApiTags('questionTags')
export class QuestionTagsController {
  constructor(private readonly questionTagsService: QuestionTagsService) {}

  @Post()
  @ApiCreatedResponse({type: QuestionTagEntity})
  async create(@Body() createQuestionTagDto: CreateQuestionTagDto) {
    const isValidInput = yupCreateQuestionTagsInput.isValidSync(createQuestionTagDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }

    return this.questionTagsService.create(createQuestionTagDto);
  }

  @Get()
  @ApiOkResponse({type: QuestionTagEntity, isArray: true})
  async findAll() {
    return this.questionTagsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: QuestionTagEntity})
  async findOne(@Param('id') id: string) {
    return this.questionTagsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type: QuestionTagEntity})
  async update(@Param('id') id: string, @Body() updateQuestionTagDto: UpdateQuestionTagDto) {
    const isValidInput = yupCreateQuestionTagsInput.isValidSync(updateQuestionTagDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }
    return this.questionTagsService.update(+id, updateQuestionTagDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: QuestionTagEntity})
  async remove(@Param('id') id: string) {
    return this.questionTagsService.remove(+id);
  }
}
