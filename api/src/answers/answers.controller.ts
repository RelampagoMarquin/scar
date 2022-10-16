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
  ApiTags 
} from '@nestjs/swagger';
import { yupCreateAnswersInput } from 'src/yup/answers';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { AnswerEntity } from './entities/answer.entity';

@Controller('answers')
@ApiTags('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  @ApiCreatedResponse({ type: AnswerEntity})
  create(@Body() createAnswerDto: CreateAnswerDto) {
    // utiliza o yup para validar os dados
    const isValidInput = yupCreateAnswersInput.isValidSync(createAnswerDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }

    return this.answersService.create(createAnswerDto);
  }

  @Get()
  @ApiOkResponse({ type: AnswerEntity, isArray: true})
  findAll() {
    return this.answersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AnswerEntity})
  findOne(@Param('id') id: string) {
    return this.answersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AnswerEntity})
  update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    const isValidInput = yupCreateAnswersInput.isValidSync(updateAnswerDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }
    
    return this.answersService.update(+id, updateAnswerDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AnswerEntity})
  remove(@Param('id') id: string) {
    return this.answersService.remove(+id);
  }
}
