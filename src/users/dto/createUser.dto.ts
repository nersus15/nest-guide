import { IsNotEmpty } from 'class-validator';
export class CreateUserDTO {
    @IsNotEmpty()
    username: String;

    @IsNotEmpty()
    password: String;
}