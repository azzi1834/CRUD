import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/paginationQuery.dto';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class CourseServices {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createCourse(dto: CreateCourseDto, userId: number) {
    debugger;
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }

    const course = this.courseRepository.create({ ...dto });

    course.users = [user];

    const savedCourse = await this.courseRepository.save(course);

    return savedCourse;
  }

  async findCourse(id: number) {
    return await this.courseRepository.findOne({
      where: { id },
      relations: ['users'],
    });
  }

  async findAllCourses() {
    return await this.courseRepository.find({
      relations: ['users'],
    });
  }

  async updateCourse(id: number, dto: UpdateCourseDto) {
    const order = await this.courseRepository.findOne({ where: { id } });

    Object.assign(order, dto);

    return await this.courseRepository.save(order);
  }

  async deleteCourse(id: number) {
    debugger;

    const order = await this.courseRepository.findOne({ where: { id } });

    if (order === null) {
      throw new NotFoundException('Order Not found');
    } else {
      const deletedOrder = await this.courseRepository.remove(order);

      return { message: 'Order deleted', deletedorder: deletedOrder };
    }
  }
}
