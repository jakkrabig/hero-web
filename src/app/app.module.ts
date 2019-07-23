import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'angular2-chartjs';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroCardComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
