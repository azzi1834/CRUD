import { IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly courseTitle: string;

  @IsNumber()
  readonly courseMarks: number;
}
