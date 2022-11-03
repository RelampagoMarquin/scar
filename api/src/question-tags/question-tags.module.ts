import { Module } from '@nestjs/common';
import { QuestionTagsService } from './question-tags.service';
import { QuestionTagsController } from './question-tags.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [QuestionTagsController],
  providers: [QuestionTagsService],
  imports: [PrismaModule]
})
export class QuestionTagsModule {}
