import { DataSource, DataSourceOptions } from 'typeorm';

import { UserEntity } from './src/user/entities/user.entity';
// import { config } from 'dotenv';

// config({
//   path: './.production.env',
// });

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost', //configService.get('POSTGRES_HOST'),
  port: 5432, //configService.get('POSTGRES_PORT'),
  username: 'codemakeruser', //configService.get('POSTGRES_USER'),
  password: 'pass1234', //configService.get('POSTGRES_PASSWORD'),
  database: 'casino', //configService.get('POSTGRES_DB'),
  // entities: [__dirname + '/**/entities/*.entity{.js,.ts}'],
  entities: [UserEntity],
  migrations: [__dirname + '/src/database/migrations/**/*{.js,.ts}'],
  // namingStrategy: new SnakeNamingStrategy(),
};

const CasinoDataSource = new DataSource(dataSourceOptions);

export default CasinoDataSource;
