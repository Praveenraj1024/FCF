import { Component, OnInit } from '@angular/core';
// import { timer } from 'rxjs';

@Component({
  selector: 'app-gamecomponent',
  templateUrl: './gamecomponent.component.html',
  styleUrls: ['./gamecomponent.component.css']
})
export class GamecomponentComponent implements OnInit {
  public cards = [];
  score = 0;
  timing = 0;
  missed = 0;
  t: any;
  public isGameActive = false;
  public selectedCard = {};
  hasChance: boolean;
  cardClickTimer: any;
  public cardClickTimeInterval = 1000;
  // public gameType = 2;
  gameTiming: any;
  public gameTimeLimit =  10000;

  constructor() { }

  ngOnInit() {
    this.createCards();
    this.gameTiming = setTimeout(() => {
    }, this.gameTimeLimit);
    console.log(this.gameTiming);
    this.cardClickTimer = setInterval(() => {
      this.pickCard();
    }, this.cardClickTimeInterval);
    this.isGameActive = true;
    console.log(typeof(this.timing));

    // this.timedCount();
  }


  // timedCount() {

  //   // console.log(this.timing);
  //   // console.log(this.t);
  //   console.log(typeof(this.timing));

  //   this.timing = this.timing + 1;
  //   console.log('f');

  //   // console.log(typeof(this.timing));

  //   // console.log(this.timing);
  //   if (this.timing < 60) {
  //     this.t = setTimeout(this.timedCount(), 1000);
  //     console.log(this.timing);

  //   } else {
  //     clearTimeout(this.t);
  //   }


  // }

  createCards() {
    for (let cardIndex = 1; cardIndex <= 4; cardIndex++) {
      this.cards.push({
        cardId: cardIndex,
        isActive: false
      });
    }
    console.log(this.cards[0]);

  }
  pickCard() {
    // tslint:disable-next-line: no-string-literal
    this.selectedCard['isActive'] = false;
    let card = this.cards[this.randomCardId()];
    while (card === this.selectedCard) {
      card = this.cards[this.randomCardId()];
    }
    this.selectedCard = card;
    // tslint:disable-next-line: no-string-literal
    this.selectedCard['isActive'] = true;
    this.hasChance = true;
  }

  public randomCardId(): number {
    return Math.floor(Math.random() * 4);
  }


  cardClicked(cardId: number) {
    if (this.isGameActive) {
// tslint:disable-next-line: no-string-literal
      if ((this.selectedCard['cardId'] === cardId) && (this.hasChance === true)) {
        this.score++;
        this.hasChance = false;
        clearInterval(this.cardClickTimer);
        this.pickCard();
        this.cardClickTimer = setInterval(() => {
          this.pickCard();
        }, this.cardClickTimeInterval);
      }
    }
    console.log(this.score);

  }







}
