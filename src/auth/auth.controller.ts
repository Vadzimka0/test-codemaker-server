import {
  Body,
  Controller,
  Post,
  Inject,
  Req,
  UseGuards,
  HttpCode,
  Get,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Request } from 'express';

import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { ExpressRequestType } from './types/express-request.type';
import { AuthDto } from './dto/auth.dto';

@Controller('admins')
export class AuthController {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @HttpCode(200)
  @Post()
  async authenticate(@Body() authDto: AuthDto, @Req() request: Request) {
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

    const user = this.authService.getByLogin(authDto.login);

    const cachedValue = { ...authDto, ...db };
    //Save to Redis
    await this.cacheManager.set(user.login, JSON.stringify(cachedValue));

    const accessTokenCookie = this.authService.getCookieWithToken(user.login);
    request.res.setHeader('Set-Cookie', accessTokenCookie);

    return { casino, db, user };
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async signOut(@Req() request: ExpressRequestType) {
    request.res.setHeader('Set-Cookie', this.authService.getCookiesForLogOut());
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  authMe(@Req() request: ExpressRequestType) {
    return request.user;
  }
}
