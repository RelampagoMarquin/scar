import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { TypesModule } from './types/types.module';
import { AnswersModule } from './answers/answers.module';
import { TagsModule } from './tags/tags.module';
import { FavoritesModule } from './favorites/favorites.module';
import { MidiasModule } from './midias/midias.module';
import { QuestionTagsModule } from './question-tags/question-tags.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, 
    UsersModule, 
    QuestionsModule, 
    TypesModule, 
    AnswersModule, 
    TagsModule, 
    FavoritesModule, 
    MidiasModule, 
    QuestionTagsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
