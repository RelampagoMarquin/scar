import { ApiProperty } from "@nestjs/swagger";

export class CreateAnswerDto {

    @ApiProperty()
    answer: string;

    @ApiProperty({ required: false, default: false })
    best?: boolean = false;

    @ApiProperty({ required: false, default: 0 })
    avaliation?: number = 0;

    @ApiProperty()
    questionId: number;

    @ApiProperty()
    userId: number;
}
