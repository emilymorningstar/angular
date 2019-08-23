import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivationStart} from '@angular/router';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() ref: EventEmitter<number> = new EventEmitter();
  n = 0;
  interval;


  constructor() { }

  ngOnInit() {
  }

  onStart($event) {
    this.interval = setInterval(() => {this.n = this.n + 1; this.ref.emit(this.n); }, 1000 );

  }

  onEnd($event) {
    clearInterval(this.interval);
    this.n = 0;
  }
}
