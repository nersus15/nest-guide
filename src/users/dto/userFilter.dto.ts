import { UserRole } from "../user.model";

export class UserFilterDTO {
    role: UserRole
    keyword: string
}