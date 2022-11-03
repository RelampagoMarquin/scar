import { PartialType } from '@nestjs/swagger';
import { CreateQuestionTagDto } from './create-question-tag.dto';

export class UpdateQuestionTagDto extends PartialType(CreateQuestionTagDto) {}
