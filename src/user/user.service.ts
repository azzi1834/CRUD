import { Injectable, NotFoundException, Res } from '@nestjs/common';
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
    return await this.userRepository.findOne(data);
  }

  async createUser(data) {
    try {
      const alreadyUser = await this.userRepository.find(data.body.email);

      // resolve this - send proper response if user already exists
      if (alreadyUser.length != 0) {
        debugger;
        console.log('User already exist', alreadyUser);
        return 0;
      }

      //resolve this
      return await this.userRepository.save(data.body);
    } catch (err) {
      return err;
    }
  }
}
