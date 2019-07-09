import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class TimingComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('timer') public c;
  // public c = 0;
  public t;
  public timerIsOn = 0;

  constructor() { }

  ngOnInit() {
    // this.timedCount();
  }



  // startCount() {
  //   if (!this.timerIsOn) {
  //     this.timerIsOn = 1;
  //     this.timedCount();
  //   }
  // }

  // stopCount() {
  //   clearTimeout(this.t);
  //   this.timerIsOn = 0;
  // }

}
