import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserFilterDTO } from './dto/userFilter.dto';
import { UserRoleValidationPipe } from './pipes/user-role-validation.pipe';
import { User } from './user.entity';
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    // @Get()
    // getUsers(@Query(ValidationPipe) filterDTO: UserFilterDTO): User[] {
    //     if (Object.keys(filterDTO).length) {
    //         return this.usersService.getUserWithFilter(filterDTO);
    //     } else {
    //         return this.usersService.getAllUsers();
    //     }

    // }

    @Get('/:id')
    getUserById(@Param('id') id: string): Promise<User> {
        return this.usersService.getUserById(id);
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createUser(@Body() createUserDTO: CreateUserDTO): User {
    //     return this.usersService.createUser(createUserDTO);
    // }

    // @Delete('/:id')
    // deleteUserById(@Param('id') id: String): void {
    //     this.usersService.deleteUserByid(id);
    // }

    // @Patch('/:id')
    // updateUserById(@Param('id') id: String, @Body('role', UserRoleValidationPipe) role: String) {
    //     return this.usersService.updateUserById(id, role);
    // }

}
