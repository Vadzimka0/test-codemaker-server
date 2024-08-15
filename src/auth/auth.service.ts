import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { firstValueFrom } from 'rxjs';

import { AuthDto } from './dto/auth.dto';
import { TokenPayload } from './types/token-payload.type';

@Injectable()
export class AuthService {
  private readonly headers: any;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    this.headers = {
      'Content-Type': 'application/json',
      'X-Project-Id': 'vivajack',
    };
  }

  async login(authDto: AuthDto) {
    const settings = await this.fetchSettings(authDto);

    await this.cacheManager.set(authDto.login, JSON.stringify(settings));

    return settings;
  }

  async fetchSettings(authDto: AuthDto) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(this.configService.get('AUTH_API_URL'), authDto, {
          headers: this.headers,
        }),
      );
      return response.data;
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  getCookieWithToken(login: string) {
    const payload: TokenPayload = { login };
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
      expiresIn: `${this.configService.get(
        'JWT_ACCESS_TOKEN_EXPIRATION_TIME',
      )}s`,
    });
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
      'JWT_ACCESS_TOKEN_EXPIRATION_TIME',
    )}`;
  }

  getCookiesForLogOut() {
    return [
      'Authentication=; HttpOnly; Path=/; Max-Age=0',
      // 'Refresh=; HttpOnly; Path=/; Max-Age=0',
    ];
  }

  async getByLogin(login: string) {
    const cachedData = await this.cacheManager.get<string>(login);

    if (!cachedData) {
      throw new InternalServerErrorException('Something went wrong');
    }

    const settings = JSON.parse(cachedData);

    return settings.user;
  }
}
