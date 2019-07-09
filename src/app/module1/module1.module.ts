import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomepageComponent } from './homepage/homepage.component';
import { StartpageComponent } from './homepage/startpage/startpage.component';
import { LeaderboardComponent } from './homepage/leaderboard/leaderboard.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HomepageComponent, StartpageComponent, LeaderboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class Module1Module { }
