import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionDto {
    
    @ApiProperty()
    question: string;

    @ApiProperty({ required: false, default: false })
    resolved?: boolean = false;

    @ApiProperty()
    typeId: number;

    @ApiProperty()
    userId: number;
}
