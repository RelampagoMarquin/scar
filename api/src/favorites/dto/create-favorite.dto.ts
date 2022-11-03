import { ApiProperty } from "@nestjs/swagger";

export class CreateFavoriteDto {
    
    @ApiProperty()
    userId: number;

    @ApiProperty()
    tagId: number;
}
