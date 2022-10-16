import { Type } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class TypeEntity implements Type {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}
