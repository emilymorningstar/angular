import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  count = 0;
  buttonActive = false;
   list = <number[]>[];

  constructor() {

  }
  ngOnInit() {

  }
  addClick() {
    this.list.push(this.count);
    this.buttonActive = !this.buttonActive;
    this.count = this.count + 1;
  }

}
