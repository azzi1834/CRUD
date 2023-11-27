import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Connection, Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { Todo } from 'src/todos/todo.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    private readonly connection: Connection,
  ) {}

  async findUser(data: string | any) {
    debugger;

    const user = await this.userRepository.findOne({
      where: { email: data.email },
    });

    return user;
  }

  async createUser(data: CreateUserDto) {
    try {
      debugger;
      const alreadyUser = await this.userRepository.findOne({
        where: { email: data.email },
      });

      if (alreadyUser) {
        throw new BadRequestException('User with this email is already exist!');
      }

      const result = await this.userRepository.save(data);

      return result;
    } catch (err) {
      return err;
    }
  }
}
