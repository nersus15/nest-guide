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

    deleteUserByid(id: String): void {
        this.users = this.users.filter(user => user.id !== id);
    }

    updateUserById(id: String, role: String): User {
        const user = this.users.find(u => u.id === id);
        switch (role) {
            case UserRole.ADMIN:
                user.role = UserRole.ADMIN;
                break;
            case UserRole.DRIVER:
                user.role = UserRole.DRIVER;
                break;
            case UserRole.PELANGGAN:
                user.role = UserRole.PELANGGAN;
                break;
        }
        return user;
    }
}
