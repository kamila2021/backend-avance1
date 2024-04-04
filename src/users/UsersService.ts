import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/models/user.entity';
import { UserRepository } from 'src/repositories/user.repository'; // Importa UserRepository

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {} // Inyecta UserRepository

  async create(user: User): Promise<User> {
    return this.userRepository.save(user); // Utiliza this.userRepository.save para crear un usuario
  }

  async update(id: number, updatedUser: Partial<User>): Promise<User> {
    const existingUser = await this.userRepository.findOnePerson(id); // Encuentra el usuario existente
    if (!existingUser) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const mergedUser = this.userRepository.merge(existingUser, updatedUser); // Fusiona los cambios en el usuario existente
    return this.userRepository.save(mergedUser); // Guarda el usuario actualizado
  }

  async remove(id: number): Promise<void> {
    const existingUser = await this.userRepository.findOnePerson(id); // Encuentra el usuario existente
    if (!existingUser) {
      throw new NotFoundException('Usuario no encontrado');
    }

    await this.userRepository.remove(existingUser); // Elimina el usuario existente
  }
}
