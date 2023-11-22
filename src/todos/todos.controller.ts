import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Response,
  HttpStatus,
  HttpCode,
  Res,
  Query,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { TodosServices } from './todos.service';
import { CreateTodoDto } from './dto/createTodo.dto';
import { JwtAuthGuard } from 'src/Auth/guard/jwtAuth.guard';
import { UpdateTodoDto } from './dto/updateTodo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoServices: TodosServices) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  //  By using @Body() decorator use variable with decorator as @Body() body, and 'body' has all variables declared in body
  create(@Body() dto: CreateTodoDto) {
    return this.todoServices.create(dto);
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
  findTodo(@Param('id') id: number) {
    const todos = this.todoServices.findTodo(id);
    console.log(todos);

    return todos;
  }

  //________second method
  //to get all parameters using param variable and then destructuring param

  // @Get(':id')
  // findTodo(@Param() param) {
  //   const todos = this.todoServices.findTodo(param.id);
  //   console.log(todos);

  //   return todos;
  // }

  @Get()
  findAllTodos() {
    const todos = this.todoServices.findAllTodos();

    return todos;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTodoDto) {
    return this.todoServices.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    debugger;

    const result = await this.todoServices.delete(id);

    // if (result.statusCode === 202) {
    //   return res.status(HttpStatus.NOT_FOUND).json({ message: result.message });
    // }

    console.log('deleted todo result', result);

    return result;
  }

  //query pagination to get limit number of rows in table
  @Get('pagination')
  pagination(@Query() queryPagination) {
    const { limit, offset } = queryPagination;
    return `This action return limit ${limit} and offset ${offset}`;
  }

  @Get('errorHandling')
  errorHanlding() {
    const a = 'abc';
    if (a === 'abc') {
      // throw new HttpException('Error is handled', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Not found');
    }
  }
}
