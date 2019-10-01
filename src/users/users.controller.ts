import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserFilterDTO } from './dto/userFilter.dto';
import { UserRoleValidationPipe } from './pipes/user-role-validation.pipe';
import { User } from './user.entity';
import { UserRole } from './user-role.enum';
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getUsers(@Query(ValidationPipe) filterDTO: UserFilterDTO) {
        return this.usersService.getUsers(filterDTO);
    }

    @Get('/:id')
    getUserById(@Param('id') id: string): Promise<User> {
        return this.usersService.getUserById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
        return this.usersService.createUser(createUserDTO);
    }

    @Delete('/:id')
    deleteUserById(@Param('id') id: string): Promise<void> {
        return this.usersService.deleteUser(id);
    }

    @Patch('/:id')
    updateUserRole(@Param('id') id: string, @Body('role', UserRoleValidationPipe) role: UserRole) {
        return this.usersService.updateUserRole(id, role);
    }

}
