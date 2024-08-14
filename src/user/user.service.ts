import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { FilterOperator, PaginateQuery, paginate } from 'nestjs-paginate';

import { UserEntity } from './entities/user.entity';
import { DynamicDatabaseService } from '../shared/services/dynamic-database.service';

@Injectable()
export class UserService {
  constructor(
    private readonly dynamicDatabaseService: DynamicDatabaseService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async findUsers(login: string, query: PaginateQuery) {
    const dbConfigString = await this.cacheManager.get<string>(login);

    if (!dbConfigString) {
      throw new InternalServerErrorException('Something went wrong');
    }

    const dbConfig = JSON.parse(dbConfigString);

    const source = await this.dynamicDatabaseService.getDataSource(dbConfig);

    try {
      const result = await paginate(query, source.getRepository(UserEntity), {
        sortableColumns: [
          'id',
          'login',
          'main_group',
          'status',
          'currency',
          'balance',
          'bonus_balance',
          'register_at',
        ],
        nullSort: 'last',
        defaultSortBy: [['id', 'DESC']],
        filterableColumns: {
          main_group: [FilterOperator.IN],
          status: [FilterOperator.IN],
          currency: [FilterOperator.IN],
        },
      });

      await source.destroy();

      return result;
    } catch (error) {
      await source.destroy();

      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
