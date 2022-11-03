import { ApiProperty } from "@nestjs/swagger";
import { Midias } from "@prisma/client";

export class MidiaEntity implements Midias {

    @ApiProperty()
    id: number;

    @ApiProperty()
    url: string;

    @ApiProperty(({ required: false, nullable: true }))
    answerId: number;

    @ApiProperty(({ required: false, nullable: true }))
    questionId: number;
}
