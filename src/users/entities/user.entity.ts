import { Task } from 'src/tasks/entities/task.entity';

export class User {
  name: string;
  email: string;
  tasks?: Array<Task>;
}