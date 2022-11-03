import { ApiProperty } from "@nestjs/swagger";

export class CreateMidiaDto {

    @ApiProperty()
    url: string;

    @ApiProperty({ required: false})
    questionId?: number = null;

    @ApiProperty({ required: false})
    answerId?: number = null;
}
