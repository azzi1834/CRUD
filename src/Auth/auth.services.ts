import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findUser({ email: email });

    if (
      user &&
      bcrypt.compare(user.password, await bcrypt.hash(password, 10))
    ) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      user: {
        id: user.user.id,
        email: user.user.email,
        name: user.user.name,
        created_at: user.user.created_at,
        updated_at: user.user.updated_at,
      },
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data) {
    debugger;
    console.log('data->body', data.body);

    data.body.password = await bcrypt.hash(data.body.password, 10);
    console.log(data.body.password);
    const response = await this.userService.createUser(data);

    if (response) {
      //don't send password - resolve it
      const { password, ...result } = response;
      console.log(response);

      return result;
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
}
