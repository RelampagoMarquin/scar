import { ApiProperty } from "@nestjs/swagger";
import { Users } from "@prisma/client";

export class UserEntity implements Users {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    class: string;

    @ApiProperty()
    registration: string;

    @ApiProperty()
    password: string;

}
