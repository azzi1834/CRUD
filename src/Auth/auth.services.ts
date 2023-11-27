import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthRegisterDto } from './dto/authRegister.dto';
import { AuthLoginDto } from './dto/authLogin.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    debugger;

    const user = await this.userService.findUser({ email: email });

    if (
      user &&
      bcrypt.compare(user.password, await bcrypt.hash(password, 10))
    ) {
      const { ...result } = user;
      return result;
    } else {
      return null;
    }
  }

  async login(dto: AuthLoginDto) {
    debugger;
    const { email, password } = dto;

    if (!email || !password) {
      throw new BadRequestException('Please provide email and password!');
    }

    const user = await this.userService.findUser({ email: email });

    if (!user || !(await this.compareData(password, user.password))) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    const payload = {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
      },
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: AuthRegisterDto) {
    debugger;

    data = { ...data, password: await bcrypt.hash(data.password, 10) };

    const response = await this.userService.createUser(data);

    return response;
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }

  public hashData(password: string) {
    return bcrypt.hash(password, 10);
  }

  public compareData(attempt: string, password: string) {
    return bcrypt.compare(attempt, password);
  }
}
