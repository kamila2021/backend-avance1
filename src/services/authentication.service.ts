import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/repositories/user.repository'; // Importa UserRepository
import { LoginDto } from 'src/dto/login.dto';
@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userRepository: UserRepository, // Agrega UserRepository como dependencia
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userRepository.findByEmailAndPassword(
      loginDto.email,
      loginDto.password,
    );

    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    const payload = { email: user.email };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
