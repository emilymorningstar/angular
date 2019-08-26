import {EventEmitter, Output} from '@angular/core';
import {printLine} from 'tslint/lib/verify/lines';

export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  // userUpdated = new EventEmitter<string[]>();
  makeActive(id: number) {
    this.activeUsers.push();
    this.inactiveUsers.splice(id, 1);
    console.log('active' + this.activeUsers);
    console.log('inactive' + this.inactiveUsers);
  }
  makeNotActive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    console.log('active' + this.activeUsers);
    console.log('inactive' + this.inactiveUsers);
  }
}
