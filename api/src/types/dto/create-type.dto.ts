import { ApiProperty } from "@nestjs/swagger";

export class CreateTypeDto {

    @ApiProperty()
    name: string;

}
