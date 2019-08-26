import {Component, OnInit} from '@angular/core';
import {UsersService} from './UsersService';
import {CounterService} from './CounterService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService,CounterService]
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private userService: UsersService, private counterService: CounterService) {}

ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
  this.inactiveUsers = this.userService.inactiveUsers;
}
onClickActive(id) {
  this.userService.makeNotActive(id);
  this.activeUsers = this.userService.activeUsers;
  this.counterService.onChange();
}
  onClickInactive(id) {
    this.userService.makeActive(id);
    this.inactiveUsers = this.userService.inactiveUsers;
    this.counterService.onChange();
  }
}
