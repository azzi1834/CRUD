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
} from '@nestjs/common';
import { TodosServices } from './todos.service';
import { CreateTodoDto } from './dto/createTodo.dto';
import { JwtAuthGuard } from 'src/Auth/guard/jwtAuth.guard';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoServices: TodosServices) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() dto: CreateTodoDto) {
    return this.todoServices.create(dto);
  }

  @Get(':id')
  findTodo(@Param('id') id: number) {
    const todos = this.todoServices.findTodo(id);
    console.log(todos);

    return todos;
  }

  @Get()
  findAllTodos() {
    const todos = this.todoServices.findAllTodos();

    return todos;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateTodoDto) {
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
}
