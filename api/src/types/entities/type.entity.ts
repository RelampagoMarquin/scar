import { Types } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class TypeEntity implements Types {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}
