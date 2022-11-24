import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {

    @ApiProperty()
    readonly registration: string;

    @ApiProperty()
    readonly password: string;
}

export class UpdatePasswordDto {

    @ApiProperty() 
    new_password: string;

    @ApiProperty() 
    old_password: string;

}