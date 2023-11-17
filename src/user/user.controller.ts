// import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
// import { UserService } from './user.service';
// import { CreateUserDto } from './dto/createUser.dto';
// import { AuthService } from 'src/Auth/auth.services';

// @Controller('user')
// export class UserController {
//   constructor(private readonly authService: AuthService) {}

//   @Post()
//   async createUser(@Body() dto: CreateUserDto, @Res() response) {
//     try {
//       const user = await this.authService.register(dto);

//       return response
//         .status(HttpStatus.CREATED)
//         .json({ message: 'User created Successfully', User: user });
//     } catch (error) {
//       debugger;
//       return response
//         .status(error.status)
//         .json({ message: 'User not created' });
//     }
//   }
// }
