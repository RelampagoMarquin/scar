import { PartialType } from '@nestjs/swagger';
import { CreateMidiaDto } from './create-midia.dto';

export class UpdateMidiaDto extends PartialType(CreateMidiaDto) {}
