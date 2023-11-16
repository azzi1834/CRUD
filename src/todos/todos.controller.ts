import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { TodosServices } from './todos.service';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoServices: TodosServices) {}

  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todoServices.create(dto);
  }

  @Get()
  async findAllTodos(@Res() response) {
    try {
      const TodosData = await this.todoServices.findAllTodos();
      return response.status(HttpStatus.OK).json({
        message: 'All Todos data found successfully',
        TodosData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get(':id')
  async getTodo(@Res() response, @Param('id') todoId: string) {
    try {
      const existingTodo = await this.todoServices.getTodo(todoId);
      return response.status(HttpStatus.OK).json({
        message: 'Todo found successfully',
        Todo: existingTodo,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete(':id')
  async deleteTodo(@Res() response, @Param('id') todoId: string) {
    try {
      const deletedTodo = await this.todoServices.deleteTodo(todoId);
      return response.status(HttpStatus.OK).json({
        message: 'Todo deleted successfully',
        deletedTodo,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put(':id')
  async updateTodo(
    @Res() response,
    @Param('id') todoId: string,
    @Body() dto: UpdateTodoDto,
  ) {
    try {
      const existingTodo = await this.todoServices.updateTodo(todoId, dto);
      return response.status(HttpStatus.OK).json({
        message: 'Todo has been successfully updated',
        existingTodo,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
