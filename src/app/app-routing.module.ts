import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamecomponentComponent } from './game/gamecomponent/gamecomponent.component';
import { HomepageComponent } from './module1/homepage/homepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'game', component: GamecomponentComponent },
  { path: '**', pathMatch: 'prefix', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
