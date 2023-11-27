import { Todo } from 'src/todos/todo.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  OneToMany,
  ManyToMany,
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

  // @OneToMany(() => Todo, (todo) => todo.user)
  // todos: Todo[];

  // @ManyToMany(
  //   () => Course,
  //   (course) => course.users, //optional
  //   { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  // )
  // @JoinTable({
  //   name: 'student_course',
  //   joinColumn: {
  //     name: 'student_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'course_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // courses?: Course[];

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
