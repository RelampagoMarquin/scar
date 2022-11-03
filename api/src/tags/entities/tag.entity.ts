import { ApiProperty } from "@nestjs/swagger";
import { Tags } from "@prisma/client";

export class TagEntity implements Tags {
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    typeId: number;
}
