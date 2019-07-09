import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() public cardData;
  @Output() public sendEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.sendEvent.emit(this.cardData.cardId);
  }

}
