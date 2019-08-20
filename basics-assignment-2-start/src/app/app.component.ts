import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  username = '';
  Empty = true;
  constructor() {

  }
  ngOnInit() {

  }
  resetUsername() {
    this.username = '';
    this.Empty = true;
  }
  isNotEmpty(event: Event) {
    if ((<HTMLInputElement>event.target).value.toString().length <= 0) {
     this.Empty = true;

    }
    this.Empty = false;
  }
}
