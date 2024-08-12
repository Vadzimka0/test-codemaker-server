import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { FilterOperator, PaginateQuery, paginate } from 'nestjs-paginate';

import { UserEntity } from './entities/user.entity';
import { DynamicDatabaseService } from '../shared/services/dynamic-database.service';
import { DbConfigDto } from './dto/db-config.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly dynamicDatabaseService: DynamicDatabaseService,
  ) {}

  async findUsers(dbConfigDto: DbConfigDto, query: PaginateQuery) {
    const source = await this.dynamicDatabaseService.getDataSource(dbConfigDto);

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
        defaultSortBy: [['id', 'ASC']],
        filterableColumns: {
          main_group: [FilterOperator.IN],
          status: [FilterOperator.IN],
          currency: [FilterOperator.IN],
        },
        maxLimit: 5,
      });
      await source.destroy();

      return result;
    } catch (error) {
      await source.destroy();

      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
