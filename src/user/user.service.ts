import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: '123', name: 'Alice Johnson', email: 'alice@example.com' },
    { id: '456', name: 'Bob Smith', email: 'bob@example.com' },
  ];

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }
}