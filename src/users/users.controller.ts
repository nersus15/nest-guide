import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getAllUsers(): User[] {
        return this.usersService.getAllUsers();
    }
    @Post()
    createUser(
        @Body('username') username: String,
        @Body('password') password: String,
    ): User {
        return this.usersService.createUser(username, password);
    }
}
