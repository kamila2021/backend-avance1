import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../model/repository/user.repository';
import { User } from '../model/entity/user.entity';
import { CreateUserDto } from 'src/dto/createrUser.dto';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findBy({
        email: email,
      });
      if (user !== null) {
        throw new Error('Usuario no encontrado');
      }
      return await user;
    } catch (error) {
      return error;
    }
  }
  async validate(email: string, password: string): Promise<User> {
    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.email = createUserDto.email;
    newUser.birthday = createUserDto.birthday;
    newUser.password = createUserDto.password;

    return await this.userRepository.save(newUser);
  }
}
