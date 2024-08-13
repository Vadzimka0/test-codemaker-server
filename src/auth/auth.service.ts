import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { TokenPayload } from './types/token-payload.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public getCookieWithToken(login: string) {
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

  public getCookiesForLogOut() {
    return [
      'Authentication=; HttpOnly; Path=/; Max-Age=0',
      // 'Refresh=; HttpOnly; Path=/; Max-Age=0',
    ];
  }

  getByLogin(login: string) {
    switch (login) {
      case 'admin1':
        return { id: 1, group: 2, login };
      case 'admin2':
        return { id: 2, group: 3, login };
      default:
        throw new NotFoundException('User with this login does not exist');
    }
  }
}
