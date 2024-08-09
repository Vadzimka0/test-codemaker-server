import { Module } from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DynamicDatabaseService } from '../shared/services/dynamic-database.service';

@Module({
  controllers: [UserController],
  providers: [UserService, DynamicDatabaseService],
})
export class UserModule {}
