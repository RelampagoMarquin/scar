import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TypesController],
  providers: [TypesService],
  imports: [PrismaModule],
})
export class TypesModule {}
