import { Injectable } from '@nestjs/common';

import { UserEntity } from './entities/user.entity';
import { DatabaseService } from './../services/database.service';
import { DbConfigDto } from './dto/db-config.dto';

@Injectable()
export class UserService {
  constructor(private readonly dataBaseService: DatabaseService) {}

  async findUsers(dbConfigDto: DbConfigDto) {
    const source = await this.dataBaseService.getDataSource(dbConfigDto);

    const [users, count] = await source
      .getRepository(UserEntity)
      .findAndCount();

    await source.destroy();

    return { users, count };
  }
}
