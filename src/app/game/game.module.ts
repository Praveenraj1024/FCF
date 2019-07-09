import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamecomponentComponent } from './gamecomponent/gamecomponent.component';
import { CardsComponent } from './gamecomponent/cards/cards.component';
import { ScoreComponent } from './gamecomponent/score/score.component';
import { TimingComponent } from './gamecomponent/timing/timing.component';

@NgModule({
  declarations: [GamecomponentComponent, CardsComponent, ScoreComponent, TimingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GamecomponentComponent
  ]
})
export class GameModule { }
