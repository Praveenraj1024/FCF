import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  public name;
  @Input() public score;

  constructor() { }

  ngOnInit() {
    // this.score = 0;
  }

}
