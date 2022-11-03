import { ApiProperty } from "@nestjs/swagger";
import { Questiontags } from "@prisma/client";

export class QuestionTagEntity implements Questiontags {

    @ApiProperty()
    id: number;

    @ApiProperty()
    tagId: number;

    @ApiProperty()
    questionId: number;
}
