import { Todo } from 'src/todos/todo.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  OneToMany,
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

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: string[];

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
