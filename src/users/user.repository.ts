import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDTO } from "./dto/createUser.dto";
import * as uuid from 'uuid';
import { UserRole } from "./user-role.enum";


@EntityRepository(User)
export class UserRepository extends Repository<User>{
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