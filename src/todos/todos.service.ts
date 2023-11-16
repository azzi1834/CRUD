import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './schemas/createTodo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';

@Injectable()
export class TodosServices {
  constructor(@InjectModel(Todo.name) private TodoModel: Model<Todo>) {}

  async create(dto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.TodoModel(dto);

    return createdTodo.save();
  }

  async findAllTodos() {
    const fetchedTodos = await this.TodoModel.find();

    if (!fetchedTodos || fetchedTodos.length === 0) {
      return 'Todos not found';
    }

    return fetchedTodos;
  }

  async getTodo(todoId: string) {
    const existingTodo = await this.TodoModel.findById(todoId).exec();
    if (!existingTodo) {
      throw new NotFoundException(`Todo #${todoId} not found`);
    }
    return existingTodo;
  }

  async deleteTodo(todoId: string) {
    const deletedTodo = await this.TodoModel.findByIdAndDelete(todoId);
    if (!deletedTodo) {
      throw new NotFoundException(`Todo #${todoId} not found`);
    }
    return deletedTodo;
  }

  async updateTodo(todoId: string, dto: UpdateTodoDto) {
    const updatedTodo = await this.TodoModel.findByIdAndUpdate(todoId, dto);
    if (!updatedTodo) {
      throw new NotFoundException(`Todo #${todoId} not found`);
    }
    return updatedTodo;
  }
}
