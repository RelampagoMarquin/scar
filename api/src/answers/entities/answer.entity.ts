import { Answers, Users } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class AnswerEntity implements Answers {
    @ApiProperty()
    id: number;

    @ApiProperty()
    answer: string;

    @ApiProperty({ required: false, nullable: true })
    best: boolean;

    @ApiProperty({ required: false, nullable: true })
    avaliation: number;

    @ApiProperty()
    questionId: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    creatAt: Date;

    /* também posso utilizar os objetos do prisma, basta importar
    @ApiProperty()
    user: User
    */
}
