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
    const settings = await this.cacheManager.get<string>(login);

    if (!settings) {
      throw new InternalServerErrorException('Something went wrong');
    }

    const { db: dbConfig } = JSON.parse(settings);

    const source = await this.dynamicDatabaseService.getDataSource(dbConfig);

    try {
      const result = await paginate(query, source.getRepository(UserEntity), {
        sortableColumns: [
          'id',
          'login',
          'group',
          'status',
          'currency',
          'balance',
          'bonus_balance',
          'date_reg',
        ],
        nullSort: 'last',
        defaultSortBy: [['id', 'DESC']],
        filterableColumns: {
          group: [FilterOperator.IN],
          status: [FilterOperator.IN],
          currency: [FilterOperator.IN],
        },
      });

      await source.destroy();

      return result;
    } catch (error) {
      await source.destroy();
      console.log('Error source database:', error);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
