import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { LocalAuthGuard } from './guard/localAuth.guard';
import { AuthService } from './auth.services';
import { JwtAuthGuard } from './guard/jwtAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  debugger;
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    debugger;

    const result = await this.authService.login(req);

    return result;
  }

  @Post('register')
  async register(@Request() req, @Response() res) {
    // resolve - return proper error if it crashed
    try {
      const result = await this.authService.register(req);

      if (result.statusCode === 409) {
        return res
          .status(HttpStatus.CONFLICT)

          .json({ message: result.message });
      }
      return res
        .status(HttpStatus.CREATED)

        .json({ message: 'User Registered Successfull', result });
    } catch (error) {
      console.log(error);
      return res
        .status(HttpStatus.BAD_REQUEST)

        .json({ message: `User registration error ${error}` });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
