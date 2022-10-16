import { Question } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class QuestionEntity implements Question{
    @ApiProperty()
    id: number;

    @ApiProperty()
    question: string;

    @ApiProperty(({ required: false, nullable: true }))
    resolved: boolean;

    @ApiProperty()
    typeId: number;

    @ApiProperty()
    userId: number;
}
