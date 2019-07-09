import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class TimingComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('timer') public c;

  constructor() { }

  ngOnInit() {

  }
}
