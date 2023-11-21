import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findUser(data: string | any) {
    debugger;
    const user = await this.userRepository.findOne({
      where: { email: data.email },
    });

    return user;
  }

  async createUser(data) {
    try {
      debugger;
      const email = data.body.email;
      const alreadyUser = await this.userRepository.findOne({
        where: { email: email },
      });
      console.log(alreadyUser);

      // resolve this - send proper response if user already exists
      if (alreadyUser) {
        debugger;
        console.log('User already exist', alreadyUser);
        return {
          error: 'User registration failed',
          statusCode: 409,
          message: 'User already exists',
        };
      }

      //resolve this
      const result = await this.userRepository.save(data.body);

      return result;
    } catch (err) {
      return err;
    }
  }
}
