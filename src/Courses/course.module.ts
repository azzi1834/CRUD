import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { CourseController } from './course.controller';
import { CourseServices } from './course.service';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, User])],
  controllers: [CourseController],
  providers: [CourseServices],
})
export class CourseModule {}
