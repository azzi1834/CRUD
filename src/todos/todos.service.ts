import { Injectable } from '@nestjs/common';
import { Todo } from './schemas/createTodo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/createTodo.dto';

@Injectable()
export class TodosServices {
  constructor(@InjectModel(Todo.name) private TodoModel: Model<Todo>) {}

  async create(dto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.TodoModel(dto);

    return createdTodo.save();
  }

  // findMany() {
  //   this.TodoModel.find();
  // }

  // async update(id: number, dto: CreateTodoDto) {
  //   const todo = await this.TodoModel.findOne({ where: { id } });

  //   Object.assign(todo, dto);

  //   return await this.TodoModel.save(todo);
  // }

  // async delete(id: number) {
  //   const todo = await this.TodoModel.findOne({ where: { id } });

  //   return await this.TodoModel.remove(todo);
  // }
}
