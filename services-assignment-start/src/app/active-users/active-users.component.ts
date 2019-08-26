import { Component, Input  } from '@angular/core';
import {UsersService} from '../UsersService';
import {CounterService} from '../CounterService';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  @Input() user: string;
}
