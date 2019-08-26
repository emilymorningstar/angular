import { Component, Input  } from '@angular/core';
import {UsersService} from '../UsersService';
import {CounterService} from '../CounterService';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() user: string;

}
