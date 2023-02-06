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
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { 
  ApiCreatedResponse, 
  ApiOkResponse, 
  ApiSecurity, 
  ApiTags 
} from '@nestjs/swagger';
import { FavoriteEntity } from './entities/favorite.entity';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { yupCreateFavoritesInput } from 'src/yup/favorites';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiSecurity('access-key')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('favorites')
@ApiTags('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  @ApiCreatedResponse({type: FavoriteEntity})
  async create(@Body() createFavoriteDto: CreateFavoriteDto) {
    const isValidInput = yupCreateFavoritesInput.isValidSync(createFavoriteDto)
    if (!isValidInput) {
      throw new BadRequestException('Seu input está inválido')
    }

    return this.favoritesService.create(createFavoriteDto);
  }

  @Get()
  @ApiOkResponse({type: FavoriteEntity, isArray: true})
  async findAll() {
    return this.favoritesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: FavoriteEntity})
  async findOne(@Param('id') id: string) {
    return this.favoritesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type: FavoriteEntity})
  async update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    const isValidInput = yupCreateFavoritesInput.isValidSync(updateFavoriteDto)
    if (!isValidInput) {
      throw new BadRequestException('Seu input está inválido')
    }
    return this.favoritesService.update(+id, updateFavoriteDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: FavoriteEntity})
  async remove(@Param('id') id: string) {
    return this.favoritesService.remove(+id);
  }
}
