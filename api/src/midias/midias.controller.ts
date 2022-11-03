import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MidiasService } from './midias.service';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { UpdateMidiaDto } from './dto/update-midia.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MidiaEntity } from './entities/midia.entity';

@Controller('midias')
@ApiTags("midias")
export class MidiasController {
  constructor(private readonly midiasService: MidiasService) {}

  @Post()
  @ApiCreatedResponse({type: MidiaEntity})
  create(@Body() createMidiaDto: CreateMidiaDto) {
    return this.midiasService.create(createMidiaDto);
  }

  @Get()
  @ApiOkResponse({type: MidiaEntity, isArray: true})
  findAll() {
    return this.midiasService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: MidiaEntity})
  findOne(@Param('id') id: string) {
    return this.midiasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type: MidiaEntity})
  update(@Param('id') id: string, @Body() updateMidiaDto: UpdateMidiaDto) {
    return this.midiasService.update(+id, updateMidiaDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: MidiaEntity})
  remove(@Param('id') id: string) {
    return this.midiasService.remove(+id);
  }
}
