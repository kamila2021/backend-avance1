import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserRepository } from '../model/repository/user.repository';
import { User } from 'src/app/user/model/entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userRepository.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userRepository.findUserById(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatedUser: Partial<User>,
  ): Promise<User> {
    return this.userRepository.updateUser(id, updatedUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.userRepository.removeUser(id);
  }
}
