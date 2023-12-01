import { Course } from 'src/Courses/course.entity';
import { Todo } from 'src/todos/todo.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true, type: 'varchar' })
  name: string;

  @Column({ nullable: true, type: 'int' })
  age: number;

  @Column({})
  email: string;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  password: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo;

  @ManyToMany(() => Course, (course) => course.users, { cascade: true })
  @JoinTable({
    name: 'users_courses',
    joinColumn: {
      name: 'user_Id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'course_Id',
      referencedColumnName: 'id',
    },
  })
  courses: Course[];

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
