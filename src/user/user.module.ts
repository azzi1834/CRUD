import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthService } from 'src/Auth/auth.services';
import { JwtService } from '@nestjs/jwt';
import { Todo } from 'src/todos/todo.entity';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Todo])],
  controllers: [UserController],
  providers: [UserService, AuthService, JwtService],
  exports: [TypeOrmModule, UserService],
})
export class UserModule {}
