import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserRole } from './user.model';
import * as uuid from 'uuid';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserFilterDTO } from './dto/userFilter.dto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    getAllUsers(): User[] {
        return this.users;
    }
    getUserWithFilter(filterDTO: UserFilterDTO): User[] {
        const { role, keyword } = filterDTO;
        let users = this.getAllUsers();

        if (role) {
            users = users.filter(user => user.role === role);
        }
        if (keyword) {
            users = users.filter(user =>
                user.username.includes(keyword) ||
                user.password.includes(keyword)
            );
        }

        return users;
    }
    getUserById(id: String): User {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`User With ID "${id}" Not Found`);
        }
        return user;
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
        const userFound = this.getUserById(id);
        this.users = this.users.filter(user => user.id !== userFound.id);
    }

    updateUserById(id: String, role: String): User {
        const user = this.getUserById(id);
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
