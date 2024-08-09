import { Module } from '@nestjs/common';
import { CacheModule, CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
        const store = await redisStore({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        });
        return {
          store: () => store,
        };
      },
    } as CacheModuleAsyncOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
