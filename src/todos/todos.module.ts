import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosServices } from './todos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/createTodo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [TodosController],
  providers: [TodosServices],
})
export class TodosModule {}
