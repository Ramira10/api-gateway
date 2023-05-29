import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class UserDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly username: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    readonly email: string;
    @ApiProperty()
    readonly password: string;
}