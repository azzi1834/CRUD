import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/paginationQuery.dto';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';

@Injectable()
export class CourseServices {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async createCourse(dto: CreateCourseDto, userId: number) {
    debugger;

    const course = this.courseRepository.create({ ...dto, userId: userId });

    return await this.courseRepository.save(course);
  }

  findOrder(id: number) {
    return this.courseRepository.findOne({
      where: { id },
      // relations: ['user']
    });
  }

  findAllOrders(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.courseRepository.find({
      // relations: ['user'],
      skip: offset,
      take: limit,
    });
  }

  async update(id: number, dto: UpdateCourseDto) {
    const order = await this.courseRepository.findOne({ where: { id } });

    Object.assign(order, dto);

    return await this.courseRepository.save(order);
  }

  async delete(id: number) {
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
