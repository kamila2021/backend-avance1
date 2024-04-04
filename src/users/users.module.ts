import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/controllers/user.controller';
import { User } from 'src/models/user.entity';
import { UserRepository } from 'src/repositories/user.repository'; // Importa UserRepository aquí
import { UsersService } from './UsersService';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserRepository]), // Agrega UserRepository aquí
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
