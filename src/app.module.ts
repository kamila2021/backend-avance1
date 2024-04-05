import { Module } from '@nestjs/common';
import { databaseConfig } from './config/database.config';
import { ApiController } from './api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './app/user/model/repository/user.repository'; // Importa UserRepository

import { AuthModule } from './app/auth/auth.module';
import { AuthController } from './app/auth/controller/auth.controller';

import { UserModule } from './app/user/user.module';
import { UserController } from './app/user/controller/user.controller';

import { AuthService } from './app/auth/service/auth.service';
import { UserService } from './app/user/service/user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([UserRepository]), // Registra UserRepository aquí
    AuthModule,
    UserModule,
  ],
  controllers: [ApiController, AuthController, UserController],
  providers: [AuthService, UserService, UserRepository, JwtService], // Asegúrate de incluir UserRepository aquí
})
export class AppModule {}
