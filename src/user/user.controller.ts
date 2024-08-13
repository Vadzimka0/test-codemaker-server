import { Controller, Get, HttpCode, Req, UseGuards } from '@nestjs/common';
import { Paginate, PaginateQuery } from 'nestjs-paginate';

import { UserService } from './user.service';
import { ExpressRequestType } from './../auth/types/express-request.type';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async findUsers(
    @Req() request: ExpressRequestType,
    @Paginate() query: PaginateQuery,
  ) {
    const users = await this.userService.findUsers(request.user.login, query);

    return users;
  }
}
