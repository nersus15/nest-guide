import { Injectable } from '@nestjs/common';
import { User, UserRole } from './user.model';
import * as uuid from 'uuid';
import { CreateUserDTO } from './dto/createUser.dto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    getAllUsers(): User[] {
        return this.users;
    }

    getUserById(id: String): User {
        return this.users.find(user => user.id === id);
    }

    createUser(createUserDTO: CreateUserDTO): User {
        const { username, password } = createUserDTO;
        const user: User = {
            id: uuid(),
            username,
            password,
            role: UserRole.DRIVER
        };
        this.users.push(user);
        return user;
    }

    DeleteUserByid(id: String): void {
        this.users = this.users.filter(user => user.id !== id);
    }
}
