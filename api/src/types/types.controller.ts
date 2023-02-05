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
  ApiSecurity,
  ApiTags 
} from '@nestjs/swagger';
import { yupCreateTypeInput } from 'src/yup/types';
import { TypeEntity } from './entities/type.entity';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiSecurity('access-key')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('types')
@ApiTags('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  @ApiCreatedResponse({ type: TypeEntity})
  async create(@Body() createTypeDto: CreateTypeDto) {
    // utiliza o yup para validar os dados
    const isValidInput = yupCreateTypeInput.isValidSync(createTypeDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }
    
    return this.typesService.create(createTypeDto);
  }

  @Get()
  @ApiOkResponse({ type: TypeEntity, isArray: true})
  async findAll() {
    return this.typesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TypeEntity})
  async findOne(@Param('id') id: string) {
    return this.typesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TypeEntity})
  async update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    const isValidInput = yupCreateTypeInput.isValidSync(updateTypeDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }
    return this.typesService.update(+id, updateTypeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TypeEntity})
  async remove(@Param('id') id: string) {
    return this.typesService.remove(+id);
  }
}
