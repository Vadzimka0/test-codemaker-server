import { Body, Controller, Get } from '@nestjs/common';

import { UserService } from './user.service';
import { DbConfigDto } from './dto/db-config.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findUsers(@Body() dbConfigDto: DbConfigDto) {
    const users = await this.userService.findUsers(dbConfigDto);

    return users;
  }
}
