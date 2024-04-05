import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
@Injectable()
export class UserRepository extends Repository<User> {
  async findAllUsers(): Promise<User[]> {
    try {
      return await this.find();
    } catch (error) {
      return error;
    }
  }

  async findUserById(id: number): Promise<User> {
    try {
      const user = await this.findBy({
        id: id,
      });
      if (user !== null) {
        throw new Error('Usuario no encontrado');
      }
      return await user;
    } catch (error) {
      return error;
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      return await this.create(user);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async updateUser(id: number, updatedUser: Partial<User>): Promise<User> {
    try {
      const user = await this.findUserById(id);
      if (user == null) {
        throw new Error('Usuario no existe!!');
      }
      return await this.save(updatedUser);
    } catch (error) {
      return error;
    }
  }

  async removeUser(id: number): Promise<void> {
    try {
      const user = await this.findUserById(id);
      if (user == null) {
        throw new Error('Usuario no existe!!');
      }
      await this.remove(user);
    } catch (error) {
      return error;
    }
  }
}
