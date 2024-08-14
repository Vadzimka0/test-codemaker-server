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
    // const { host, port, username, password, database } = dbConfig;
    const host = 'cs-1-dev-vivajack-do-user-15954722-0.c.db.ondigitalocean.com';
    const port = 25060;
    const username = 'doadmin';
    const password = this.configService.get('MYSQL_PASS');
    const database = 'casino';

    try {
      console.log('init before: ', this.dataSource?.isInitialized);
      // if (!this.dataSource?.isInitialized) {
      this.dataSource = new DataSource({
        type: 'mysql',
        host,
        port,
        username,
        password,
        database,
        // entities: [UserEntity],
        synchronize: true,
      });
      // }
      await this.dataSource.initialize();

      console.log('init after: ', this.dataSource?.isInitialized);
      console.log(
        'entityMetadatas: ',
        this.dataSource.getRepository(UserEntity),
      );

      return this.dataSource;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      await this.dataSource.destroy();
      throw new InternalServerErrorException();
    }
  }
}
