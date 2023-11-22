import { IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;
}

// @IsString() validator validate datatype of given body data on runtime and throw error if datatype is not matched

// for validation of all array elememts use each:true in @IsString() decorator as @IsString({'each:true'})
