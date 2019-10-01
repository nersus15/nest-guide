import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserFilterDTO } from './dto/userFilter.dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRole } from './user-role.enum';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) { }

    async getUsers(filterDTO: UserFilterDTO): Promise<User[]> {
        return this.userRepository.getUsers(filterDTO);
    }
    async getUserById(id: string): Promise<User> {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new NotFoundException(`User With ID "${id}" Not Found`);
        }
        return user;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        return this.userRepository.createUser(createUserDTO);
    }

    async deleteUser(id: string): Promise<void> {
        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`User With ID "${id}" Not Found`);
        }
    }

    async updateUserRole(id: string, role: UserRole): Promise<User> {
        const user = await this.getUserById(id);
        user.role = role;
        await user.save();
        return user;
    }
}
