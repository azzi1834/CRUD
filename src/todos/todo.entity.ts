import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
