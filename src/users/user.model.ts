export interface User {
    id: String;
    username: String;
    password: String;
    role: UserRole;
}
export enum UserRole {
    ADMIN = "ADMIN",
    DRIVER = "DRIVER",
    PELANGGAN = "PELANGGAN",
}