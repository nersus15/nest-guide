import { Injectable } from '@nestjs/common';
import { User, UserRole } from './user.model';
import * as uuid from 'uuid';

@Injectable()
export class UsersService {
    private users: User[] = [];

    getAllUsers(): User[] {
        return this.users;
    }
    createUser(username: String, password: String): User {
        const user: User = {
            id: uuid(),
            username,
            password,
            role: UserRole.DRIVER
        };
        this.users.push(user);
        return user;
    }
}
