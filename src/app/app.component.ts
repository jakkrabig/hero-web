import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-hero';
  heros: any;
  getHero(heros: any) {
    this.heros = heros;
  }
}
