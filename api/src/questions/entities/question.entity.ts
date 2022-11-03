import { Questions } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class QuestionEntity implements Questions{
    @ApiProperty()
    id: number;

    @ApiProperty()
    question: string;

    @ApiProperty(({ required: false, nullable: true }))
    resolved: boolean;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    creatAt: Date;
}
