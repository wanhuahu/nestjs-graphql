import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserInput } from './dto/create-user.input';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: '123', name: 'Alice Johnson', email: 'alice@example.com' },
    { id: '456', name: 'Bob Smith', email: 'bob@example.com' },
  ];

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  createUser(input: CreateUserInput): User {
    const newUser: User = {
      id: randomUUID(),
      ...input,
    };
    this.users.push(newUser);
    return newUser;
  }
}