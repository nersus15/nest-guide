import { UserRole } from "../user-role.enum";
import { IsOptional, IsIn, IsNotEmpty } from "class-validator";

export class UserFilterDTO {
    @IsOptional()
    @IsIn([UserRole.ADMIN, UserRole.DRIVER, UserRole.PELANGGAN])
    role: UserRole;

    @IsOptional()
    @IsNotEmpty()
    keyword: string;
}