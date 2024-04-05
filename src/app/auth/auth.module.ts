import { Module } from '@nestjs/common';
import { AuthService } from '../auth/service/auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../auth/controller/auth.controller';
import { jwtConstants } from '../../utils/constants';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: 'JWT_SECRET',
      useValue: jwtConstants.secret,
    },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
