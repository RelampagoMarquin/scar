import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { TypesModule } from './types/types.module';
import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [PrismaModule, UsersModule, QuestionsModule, TypesModule, AnswersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
