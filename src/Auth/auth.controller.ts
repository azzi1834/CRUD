import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
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
    console.log(req.body);

    return this.authService.login(req);
  }

  @Post('register')
  async register(@Request() req) {
    // resolve - return proper error if it crashed

    return this.authService.register(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
