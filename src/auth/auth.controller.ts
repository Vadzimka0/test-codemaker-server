import { Body, Controller, Post, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

import { AuthDto } from './dto/auth.dto';

@Controller()
export class AuthController {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  @Post('admins')
  async authenticate(@Body() authDto: AuthDto) {
    const casino = {
      id: 1,
      name: 'VivaJack',
    };

    const db = {
      host: 'localhost',
      port: 5432,
      username: 'codemakeruser',
      password: 'pass1234',
      database: 'casino', // or cinema
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
