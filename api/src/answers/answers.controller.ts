import { Controller, 
  BadRequestException, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiSecurity, 
  ApiTags 
} from '@nestjs/swagger';
import { yupCreateAnswersInput } from 'src/yup/answers';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { AnswerEntity } from './entities/answer.entity';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiSecurity('access-key')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('answers')
@ApiTags('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post('question/:questionid')
  @ApiCreatedResponse({ type: AnswerEntity})
  async create(@Param('questionid') questionid:string ,@Body() createAnswerDto: CreateAnswerDto) {
    // utiliza o yup para validar os dados
    const id = questionid.toString()
    createAnswerDto.questionId = Number(id)
    /* const isValidInput = yupCreateAnswersInput.isValidSync(createAnswerDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    } */

    return this.answersService.create(createAnswerDto);
  }

  @Get()
  @ApiOkResponse({ type: AnswerEntity, isArray: true})
  async findAll() {
    return this.answersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AnswerEntity})
  async findOne(@Param('id') id: string) {
    return this.answersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AnswerEntity})
  async update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    const isValidInput = yupCreateAnswersInput.isValidSync(updateAnswerDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }
    
    return this.answersService.update(+id, updateAnswerDto);
  }

  @Patch('best/:id')
  @ApiOkResponse({ type: AnswerEntity})
  async best(@Param('id') id: number,) {
    return this.answersService.best(+id);
  }

  @Patch('avaliationup/:id')
  @ApiOkResponse({ type: AnswerEntity})
  async avaliationUp(@Param('id') id: number,) {
    return this.answersService.avaliationUp(+id);
  }

  @Patch('avaliationdown/:id')
  @ApiOkResponse({ type: AnswerEntity})
  async avaliationDown(@Param('id') id: number,) {
    return this.answersService.avaliationDown(+id);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AnswerEntity})
  async remove(@Param('id') id: string) {
    return this.answersService.remove(+id);
  }
}
