import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TagEntity } from './entities/tag.entity';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @ApiCreatedResponse({type: TagEntity})
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Get()
  @ApiOkResponse({ type: TagEntity, isArray: true})
  findAll() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TagEntity})
  findOne(@Param('id') id: string) {
    return this.tagsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TagEntity})
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(+id, updateTagDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TagEntity})
  remove(@Param('id') id: string) {
    return this.tagsService.remove(+id);
  }
}
