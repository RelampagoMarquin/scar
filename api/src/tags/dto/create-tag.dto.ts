import { ApiProperty } from "@nestjs/swagger";

export class CreateTagDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    typeId: number;
}
