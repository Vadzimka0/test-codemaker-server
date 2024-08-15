import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  HttpCode,
  Get,
} from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { ExpressRequestType } from './types/express-request.type';
import { AuthDto } from './dto/auth.dto';

@Controller('admins')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('login')
  async authenticate(@Body() authDto: AuthDto, @Req() request: Request) {
    const settings = await this.authService.login(authDto);

    const accessTokenCookie = this.authService.getCookieWithToken(
      authDto.login,
    );
    request.res.setHeader('Set-Cookie', accessTokenCookie);

    return { user: settings.user };
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
