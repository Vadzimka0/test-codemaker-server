import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

import { UserEntity } from './src/user/entities/user.entity';

config({ path: '.env' });

const configService = new ConfigService();

const dataSourceOptions2: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB_2'),
  // entities: [__dirname + '/**/entities/*.entity{.js,.ts}'],
  entities: [UserEntity],
  migrations: [__dirname + '/src/databases/migrations2/**/*{.js,.ts}'],
};

export default new DataSource(dataSourceOptions2);
