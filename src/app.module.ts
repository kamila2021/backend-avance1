import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { AuthModule } from './auth/auth.module'; // Importa tus módulos personalizados
import { UsersModule } from './users/users.module'; // Importa tus módulos personalizados
import { databaseConfig } from './config/database.config'; // Importa la configuración de la base de datos
import { ApiController } from './api.controller';
import { AuthenticationController } from './controllers/authentication.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig), // Utiliza TypeOrmModule.forRoot() con la configuración de la base de datos
    AuthModule, // Importa y registra tu módulo de autenticación
    UsersModule, // Importa y registra tu módulo de usuarios
    // Otros módulos necesarios
  ],
  controllers: [ApiController, AuthenticationController],
  providers: [], // Aquí puedes declarar tus servicios si los tienes
})
export class AppModule {}
