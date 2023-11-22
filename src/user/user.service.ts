import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findUser(data: string | any) {
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
