import { BaseEntity, Entity, PrimaryColumn, Column } from "typeorm";
import { UserRole } from "./user-role.enum";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: String;

    @Column()
    username: String;

    @Column()
    password: String;

    @Column()
    role: UserRole;
}