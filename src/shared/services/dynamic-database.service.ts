import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

import { UserEntity } from '../../user/entities/user.entity';
import { DbConfigDto } from '../../user/dto/db-config.dto';

@Injectable()
export class DynamicDatabaseService {
  constructor(private readonly configService: ConfigService) {}
  private dataSource: DataSource;

  async getDataSource(dbConfig: DbConfigDto) {
    const { host: hostUrl, username, pass: password, database } = dbConfig;

    const [host, port] = hostUrl.split(':');

    try {
      if (!this.dataSource?.isInitialized) {
        this.dataSource = new DataSource({
          type: 'mysql',
          host,
          port: Number(port),
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
