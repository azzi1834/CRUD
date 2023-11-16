import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';

@Injectable()
export class TodosServices {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(dto: CreateTodoDto) {
    const todo = this.todoRepository.create(dto);

    return await this.todoRepository.save(todo);
  }

  findTodo(id: number) {
    return this.todoRepository.findOne({ where: { id } });
  }

  findAllTodos() {
    return this.todoRepository.find();
  }

  async update(id: number, dto: CreateTodoDto) {
    const todo = await this.todoRepository.findOne({ where: { id } });

    Object.assign(todo, dto);

    return await this.todoRepository.save(todo);
  }

  async delete(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id } });

    return await this.todoRepository.remove(todo);
  }
}
