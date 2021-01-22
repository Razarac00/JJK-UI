import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './rock-paper-scissors/menu/menu.component';
import { PlayComponent } from './rock-paper-scissors/play/play.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "rock-paper-scissors/menu", component: MenuComponent},
  {path: "rock-paper-scissors/play", component: PlayComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
