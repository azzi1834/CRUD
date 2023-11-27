import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { PaginationQueryDto } from 'src/common/dto/paginationQuery.dto';

@Injectable()
export class TodosServices {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(dto: CreateTodoDto, userId: number) {
    debugger;

    const todo = this.todoRepository.create({ ...dto, userId: userId });

    return await this.todoRepository.save(todo);
  }

  findTodo(id: number) {
    return this.todoRepository.findOne({
      where: { id },
      // relations: ['user']
    });
  }

  findAllTodos(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.todoRepository.find({
      // relations: ['user'],
      skip: offset,
      take: limit,
    });
  }

  async update(id: number, dto: UpdateTodoDto) {
    const todo = await this.todoRepository.findOne({ where: { id } });

    Object.assign(todo, dto);

    return await this.todoRepository.save(todo);
  }

  async delete(id: number) {
    debugger;

    const todo = await this.todoRepository.findOne({ where: { id } });

    if (todo === null) {
      return { message: 'Todo not found' };
    } else {
      const deletedTodo = await this.todoRepository.remove(todo);

      return { message: 'Todo deleted', deletedTodo: deletedTodo };
    }
  }
}
