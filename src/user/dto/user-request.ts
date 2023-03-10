import { IsEmail, IsString } from "class-validator";

export class UserRequest {
    @IsEmail()
    @IsString()
    public email: string;

    @IsString()
    public password: string;

}