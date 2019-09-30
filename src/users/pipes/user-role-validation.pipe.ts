import { PipeTransform, BadRequestException } from "@nestjs/common";
import { UserRole } from "../user-role.enum";

export class UserRoleValidationPipe implements PipeTransform {
    readonly allowedRole = [
        UserRole.ADMIN,
        UserRole.DRIVER,
        UserRole.PELANGGAN
    ];
    transform(value: any) {
        value = value.toUpperCase();
        if (!this.isValidRole(value)) {
            throw new BadRequestException(`${value} is an Invalid Role`);
        } 

        return value;
    }
    private isValidRole(role: any) {
        const index = this.allowedRole.indexOf(role);
        return index !== -1;
    }
}