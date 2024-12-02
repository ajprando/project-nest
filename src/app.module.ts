import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AppCacheModule } from './cache/cache.module';
import { TasksModule } from './tasks/task.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    MongooseModule.forRoot(`${process.env.MONGO_URL ?? 'mongodb://localhost:27017/nest'} `),
    AuthModule,
    AppCacheModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}