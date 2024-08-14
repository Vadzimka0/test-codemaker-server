import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { UserEntity } from '../../user/entities/user.entity';
import { DbConfigDto } from '../../user/dto/db-config.dto';

@Injectable()
export class DynamicDatabaseService {
  private dataSource: DataSource;

  async getDataSource(dbConfig: DbConfigDto) {
    const { host, port, username, password, database } = dbConfig;

    try {
      if (!this.dataSource?.isInitialized) {
        this.dataSource = new DataSource({
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          entities: [UserEntity],
          synchronize: false,
        });
      }

      await this.dataSource.initialize();

      return this.dataSource;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      await this.dataSource.destroy();
      throw new InternalServerErrorException();
    }
  }
}
