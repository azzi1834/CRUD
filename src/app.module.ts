import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { AuthModule } from './Auth/auth.module';
import { CourseModule } from './Courses/course.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => dataSourceOptions,
      inject: [ConfigService],
    }),
    TodosModule,
    UserModule,
    AuthModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
