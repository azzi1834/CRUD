import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Response,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './guard/localAuth.guard';
import { AuthService } from './auth.services';
import { JwtAuthGuard } from './guard/jwtAuth.guard';
import { AuthRegisterDto } from './dto/authRegister.dto';
import { AuthLoginDto } from './dto/authLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() dto: AuthLoginDto) {
    debugger;

    const result = await this.authService.login(dto);

    return result;
  }

  @Post('register')
  async register(@Response() res, @Body() dto: AuthRegisterDto) {
    try {
      debugger;
      const result = await this.authService.register(dto);
      // return result;
      if (result.status === 400) {
        return res
          .status(HttpStatus.CONFLICT)

          .json({ message: result.message });
      }
      return res
        .status(HttpStatus.CREATED)

        .json({ message: 'User Registered Successfull', result });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
