import { Body, Controller, Post, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

import { AuthDto } from './dto/auth.dto';

@Controller()
export class AuthController {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly configService: ConfigService,
  ) {}

  @Post('admins')
  async authenticate(@Body() authDto: AuthDto) {
    const casino = {
      id: 1,
      name: 'VivaJack',
    };

    const database =
      authDto.login === 'admin1'
        ? `${this.configService.get('POSTGRES_DB_1')}`
        : `${this.configService.get('POSTGRES_DB_2')}`;

    const db = {
      host: `${this.configService.get('POSTGRES_HOST')}`,
      port: `${this.configService.get('POSTGRES_PORT')}`,
      username: `${this.configService.get('POSTGRES_USER')}`,
      password: `${this.configService.get('POSTGRES_PASSWORD')}`,
      database,
    };

    const user = {
      id: 1,
      group: 2,
      login: authDto.login,
    };

    const cachedValue = { ...authDto, ...db };
    //Save to Redis
    await this.cacheManager.set(authDto.login, JSON.stringify(cachedValue));

    return { casino, db, user };
  }
}
