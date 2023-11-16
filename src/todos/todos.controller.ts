import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosServices } from './todos.service';
import { CreateTodoDto } from './dto/createTodo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoServices: TodosServices) {}

  @Post()
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

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateTodoDto) {
    return this.todoServices.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todoServices.delete(id);
  }
}
