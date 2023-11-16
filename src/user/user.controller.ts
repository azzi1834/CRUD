import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto, @Res() response) {
    try {
      const user = await this.userServices.createUser(dto);

      return response
        .status(HttpStatus.CREATED)
        .json({ message: 'User created Successfully', User: user });
    } catch (error) {
      return (
        response
          // .status(error.status)
          .json({ message: 'User not created' })
      );
    }
  }
}
