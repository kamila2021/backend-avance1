import { Module } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from '../controllers/authentication.controller';
import { UserRepository } from '../repositories/user.repository'; // Importa UserRepository
import { jwtConstants } from './constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthenticationService,
    UserRepository, // Agrega UserRepository como proveedor
    {
      provide: 'JWT_SECRET',
      useValue: jwtConstants.secret,
    },
  ],
  controllers: [AuthenticationController],
  exports: [AuthenticationService],
})
export class AuthModule {}
