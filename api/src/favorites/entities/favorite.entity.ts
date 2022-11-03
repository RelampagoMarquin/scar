import { ApiProperty } from "@nestjs/swagger";
import { Favorites } from "@prisma/client";

export class FavoriteEntity implements Favorites {

    @ApiProperty()
    id: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    tagId: number;
}
