import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto) {
    // const alreadyUser = await this.userRepository.findOne({
    //   where: { email: dto.email },
    // });

    // if (alreadyUser) {
    //   throw new NotFoundException('User already Exists');
    // }
    debugger;

    const user = await this.userRepository.create(dto);
    console.log(user);

    return await this.userRepository.save(user);
  }
}
