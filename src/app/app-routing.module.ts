import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroCardComponent } from './hero-card/hero-card.component';

const routes: Routes = [
  {
    path : 'search/:name',
    component : HeroCardComponent
  },
  {
    path : 'detail/:id',
    component : HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
