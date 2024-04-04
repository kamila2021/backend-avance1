import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
export const databaseConfig: TypeOrmModule = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'kamila',
  database: 'ms1',
  entities: [User],
  synchronize: true,
};
