import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('todos')
  async findUserDetailsWithTodos() {
    try {
      debugger;
      const user = await this.userService.findUserDetailsWithTodos();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  @Get('courses')
  async findUserDetailsWithCourses() {
    try {
      debugger;
      const user = await this.userService.findUserDetailsWithCourses();
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
