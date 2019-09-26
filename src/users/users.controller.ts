import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
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

    @Get('/:id')
    getUserById(@Param('id') id: String): User {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() createUserDTO: CreateUserDTO): User {
        return this.usersService.createUser(createUserDTO);
    }

    @Delete('/:id')
    deleteUserById(@Param('id') id: String): void {
        this.usersService.DeleteUserByid(id);
    }
}
