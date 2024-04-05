import { Module } from '@nestjs/common';
import { UserRepository } from './model/repository/user.repository';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { User } from './model/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [UserController],
  providers: [UserService, UserRepository, User],
  exports: [UserService, UserRepository],
})
export class UserModule {}
