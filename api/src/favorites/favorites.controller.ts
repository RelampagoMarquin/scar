import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FavoriteEntity } from './entities/favorite.entity';

@Controller('favorites')
@ApiTags('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  @ApiCreatedResponse({type: FavoriteEntity})
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoritesService.create(createFavoriteDto);
  }

  @Get()
  @ApiOkResponse({type: FavoriteEntity, isArray: true})
  findAll() {
    return this.favoritesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: FavoriteEntity})
  findOne(@Param('id') id: string) {
    return this.favoritesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type: FavoriteEntity})
  update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    return this.favoritesService.update(+id, updateFavoriteDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: FavoriteEntity})
  remove(@Param('id') id: string) {
    return this.favoritesService.remove(+id);
  }
}
