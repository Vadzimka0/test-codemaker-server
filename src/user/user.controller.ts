import { Body, Controller, Get } from '@nestjs/common';

import { UserService } from './user.service';
import { DbConfigDto } from './dto/db-config.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('users')
  async findUsers(@Body() dbConfigDto: DbConfigDto) {
    const users = await this.userService.findUsers(dbConfigDto);

    return users;
  }
}
