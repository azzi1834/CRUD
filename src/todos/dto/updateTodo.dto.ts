// import { IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './createTodo.dto';

// export class UpdateTodoDto {
//   @IsString()
//   readonly title: string;
// }

//To avoid of above redundant code with createTodoDto use partialType to get all validations same as createTodoDto

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
