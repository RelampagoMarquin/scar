import { 
  BadRequestException, 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { 
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags 
} from '@nestjs/swagger';
import { yupCreateTypeInput } from 'src/yup/types';
import { TypeEntity } from './entities/type.entity';

@Controller('types')
@ApiTags('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  @ApiCreatedResponse({ type: TypeEntity})
  create(@Body() createTypeDto: CreateTypeDto) {
    // utiliza o yup para validar os dados
    const isValidInput = yupCreateTypeInput.isValidSync(createTypeDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }
    
    return this.typesService.create(createTypeDto);
  }

  @Get()
  @ApiOkResponse({ type: TypeEntity, isArray: true})
  findAll() {
    return this.typesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TypeEntity})
  findOne(@Param('id') id: string) {
    return this.typesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TypeEntity})
  update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    const isValidInput = yupCreateTypeInput.isValidSync(updateTypeDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }
    return this.typesService.update(+id, updateTypeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TypeEntity})
  remove(@Param('id') id: string) {
    return this.typesService.remove(+id);
  }
}