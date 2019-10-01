import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDTO } from "./dto/createUser.dto";
import * as uuid from 'uuid';
import { UserRole } from "./user-role.enum";
import { UserFilterDTO } from "./dto/userFilter.dto";


@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async getUsers(filterDTO: UserFilterDTO): Promise<User[]> {
        const { keyword, role } = filterDTO;
        const query = this.createQueryBuilder('user');
        if (role) {
            query.andWhere('user.role=:role', { role });
        }
        if (keyword) {
            query.andWhere('user.username LIKE :keyword', { keyword: `%${keyword}%` })
        }
        const users = await query.getMany();
        return users;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const { username, password } = createUserDTO;
        const user = new User();
        user.id = uuid();
        user.username = username;
        user.password = password;
        user.role = UserRole.DRIVER;
        await user.save();
        return user;
    }
}