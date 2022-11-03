import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
  imports: [PrismaModule]
})
export class TagsModule {}
