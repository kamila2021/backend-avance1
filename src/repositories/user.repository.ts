import { FindOneOptions, Repository } from 'typeorm';
import { User } from 'src/models/user.entity';

import { NotFoundException } from '@nestjs/common';
export class UserRepository extends Repository<User> {


  async findOnePerson(id: number): Promise<User> {
    const options: FindOneOptions<User> = {
      where: { id: String(id) }, // Convertir el id a una cadena de texto
    };

    const user = await this.findOne(options);

    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return user;
  }

  async findAll(): Promise<User[]> {
    return this.find();
  }

  async findByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User | null> {
    return this.findOne({ where: { email, password } });
  }
}
