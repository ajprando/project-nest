import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/task.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ TasksModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
