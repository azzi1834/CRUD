import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  userId: number;

  // @JoinTable()
  // @ManyToOne(() => User, (user) => user.todos)
  // user: User;
}
