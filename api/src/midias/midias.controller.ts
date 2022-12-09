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
import { MidiasService } from './midias.service';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { UpdateMidiaDto } from './dto/update-midia.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MidiaEntity } from './entities/midia.entity';
import { yupCreateMidiasInput } from 'src/yup/midias';

@Controller('midias')
@ApiTags("midias")
export class MidiasController {
  constructor(private readonly midiasService: MidiasService) {}

  @Post()
  @ApiCreatedResponse({type: MidiaEntity})
  async create(@Body() createMidiaDto: CreateMidiaDto) {
    const isValidInput = yupCreateMidiasInput.isValidSync(createMidiaDto)
    if (!isValidInput) {
      throw new BadRequestException('Seu input está inválido')
    }

    return this.midiasService.create(createMidiaDto);
  }

  @Get()
  @ApiOkResponse({type: MidiaEntity, isArray: true})
  async findAll() {
    return this.midiasService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: MidiaEntity})
  async findOne(@Param('id') id: string) {
    return this.midiasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type: MidiaEntity})
  async update(@Param('id') id: string, @Body() updateMidiaDto: UpdateMidiaDto) {
    const isValidInput = yupCreateMidiasInput.isValidSync(updateMidiaDto)

    if (!isValidInput) {
      throw new BadRequestException('Seu input está inválido')
    }

    return this.midiasService.update(+id, updateMidiaDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: MidiaEntity})
  async remove(@Param('id') id: string) {
    return this.midiasService.remove(+id);
  }
}
