import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Query,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/Auth/guard/jwtAuth.guard';
import { PaginationQueryDto } from 'src/common/dto/paginationQuery.dto';
import { CourseServices } from './course.service';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';

@Controller('course')
@UseGuards(JwtAuthGuard)
export class CourseController {
  constructor(private readonly courseServices: CourseServices) {}

  @Post('createCourse')
  //  By using @Body() decorator use variable with decorator as @Body() body, and 'body' has all variables declared in body
  create(@Body() dto: CreateCourseDto, @Req() req) {
    debugger;
    console.log(req.user);

    console.log(req.user.payload.user.id);

    const userId = req.user.payload.user.id;

    return this.courseServices.createCourse(dto, userId);
  }

  // When its only specified variable is required, declared in decorator as @Body('name') or @Body('email')

  // @HttpCode(HttpStatus.UNAUTHORIZED)
  // 1. set status code of request by using @HttpCode() decorator and specify name of code or
  // 2. By giving exact code to decorator like @HttpCode(200,201,401)
  // 3. By seting @Res() response decorator to set custom status on required condition like res.status(200) or res.status(HttpStatus.OK)

  // create(@Body('length') body, @Res() response) {
  //   return response.status(200).send(body);
  // }

  //using route parameters to get param from route

  //________First method
  //mention required parameters in @Param() decorator and then use in logic
  @Get(':id')
  findOrder(@Param('id') id: number) {
    const order = this.courseServices.findOrder(id);

    return order;
  }

  //________second method
  //to get all parameters using param variable and then destructuring param

  // @Get(':id')
  // findOrder(@Param() param) {
  //   const order = this.orderServices.findOrder(param.id);
  //   console.log(orders);

  //   return order;
  // }

  @Get()
  findAllOrders(@Query() paginationQuery: PaginationQueryDto) {
    const orders = this.courseServices.findAllOrders(paginationQuery);

    return orders;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateCourseDto) {
    return this.courseServices.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    debugger;

    const result = await this.courseServices.delete(id);

    return result;
  }
}
