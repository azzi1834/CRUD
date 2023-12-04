import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Courses' })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseTitle: string;

  @Column()
  courseMarks: number;

  @ManyToMany(() => User, (user) => user.courses)
  users: User[];
}
