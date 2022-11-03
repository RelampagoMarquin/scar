import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionTagDto {

    @ApiProperty()
    tagId: number;

    @ApiProperty()
    questionId: number;
}
