import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { UserEntity } from './../user/entities/user.entity';
import { DbConfigDto } from './../user/dto/db-config.dto';

@Injectable()
export class DatabaseService {
  private dataSource: DataSource;

  async getDataSource(dbConfigDto: DbConfigDto) {
    const { host, port, username, password, database } = dbConfigDto;

    try {
      if (!this.dataSource?.isInitialized) {
        this.dataSource = new DataSource({
          type: 'postgres',
          host,
          port,
          username,
          password,
          database, //cinema, casino
          entities: [UserEntity],
          synchronize: false,
        });
      }

      await this.dataSource.initialize();
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw new InternalServerErrorException();
    }

    return this.dataSource;
  }
}
