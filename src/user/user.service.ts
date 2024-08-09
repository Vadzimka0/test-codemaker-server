import { Injectable } from '@nestjs/common';

import { UserEntity } from './entities/user.entity';
import { DynamicDatabaseService } from '../shared/services/dynamic-database.service';
import { DbConfigDto } from './dto/db-config.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly dynamicDatabaseService: DynamicDatabaseService,
  ) {}

  async findUsers(dbConfigDto: DbConfigDto) {
    const source = await this.dynamicDatabaseService.getDataSource(dbConfigDto);

    const [users, count] = await source
      .getRepository(UserEntity)
      .findAndCount();

    await source.destroy();

    return { users, count };
  }
}
