// export class UpdateUserDto {
//   readonly name: string;
//   readonly age: number;
//   readonly email: string;
//   readonly password: string;
// }

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUser.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
