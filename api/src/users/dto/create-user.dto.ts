import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    registration: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    class: string;

    @ApiProperty()
    password: string;

}
