import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionDto {
    
    @ApiProperty()
    question: string;

    @ApiProperty({ required: false, default: false })
    resolved?: boolean = false;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    tagId: number;
}
