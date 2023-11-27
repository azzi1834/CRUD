import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Courses' })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseTitle: string;

  @Column()
  courseMarks: number;

  @Column()
  userId: number;
}
