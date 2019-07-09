import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Module1Module } from './module1/module1.module';
import { GameModule } from './game/game.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
