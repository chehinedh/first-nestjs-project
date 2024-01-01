import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Chehine', email: 'chehine@gmail.com' },
    { username: 'wiw', email: 'wiw@gmail.com' },
    { username: 'piseron', email: 'piseron@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUsers(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return userDetails;
  }
  fetchUserById(id: number) {
    return { id, username: 'Chehine', email: 'chehine@email.com' };
  }
}
