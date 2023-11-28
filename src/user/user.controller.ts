import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findUserDetails(@Param('id') id: number) {
    try {
      debugger;
      const user = await this.userService.findUserDetails(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
