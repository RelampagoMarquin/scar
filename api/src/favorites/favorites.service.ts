import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async create(createFavoriteDto: CreateFavoriteDto) {
    return this.prisma.favorites.create({data: createFavoriteDto});
  }

  async findAll() {
    return this.prisma.favorites.findMany()
  }

  async findOne(id: number) {
    return this.prisma.favorites.findUnique({where: { id }})
  }

  async update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return this.prisma.favorites.update({
      where: { id },
      data: updateFavoriteDto,
    })
  }

  async remove(id: number) {
    return this.prisma.favorites.delete({where: { id }})
  }
}
