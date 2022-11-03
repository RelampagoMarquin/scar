import { Module } from '@nestjs/common';
import { MidiasService } from './midias.service';
import { MidiasController } from './midias.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MidiasController],
  providers: [MidiasService],
  imports: [PrismaModule]
})
export class MidiasModule {}
