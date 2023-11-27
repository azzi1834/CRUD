import { IsNumber, IsString } from 'class-validator';

export class UpdateCourseDto {
  @IsString()
  readonly courseTitle: string;

  @IsNumber()
  readonly courseMarks: number;
}
