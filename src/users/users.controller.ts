import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { CreateUserDTO } from './dto/createUser.dto';
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getAllUsers(): User[] {
        return this.usersService.getAllUsers();
    }
    @Post()
    createUser(@Body() createUserDTO: CreateUserDTO): User {
        return this.usersService.createUser(createUserDTO);
    }
}
