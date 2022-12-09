import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  BadRequestException 
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { 
  ApiCreatedResponse, 
  ApiOkResponse, ApiTags 
} from '@nestjs/swagger';
import { TagEntity } from './entities/tag.entity';
import { yupCreateTagsInput } from 'src/yup/tags';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @ApiCreatedResponse({type: TagEntity})
  async create(@Body() createTagDto: CreateTagDto) {
    
    const isValidInput = yupCreateTagsInput.isValidSync(createTagDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }

    return this.tagsService.create(createTagDto);
  }

  @Get()
  @ApiOkResponse({ type: TagEntity, isArray: true})
  async findAll() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TagEntity})
  async findOne(@Param('id') id: string) {
    return this.tagsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TagEntity})
  async update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    const isValidInput = yupCreateTagsInput.isValidSync(updateTagDto)

    if(!isValidInput){
      throw new BadRequestException('Seu input está inválido')
    }
    return this.tagsService.update(+id, updateTagDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TagEntity})
  async remove(@Param('id') id: string) {
    return this.tagsService.remove(+id);
  }
}
