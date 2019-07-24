import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() heros: EventEmitter<any> = new EventEmitter();
  name = '';
  constructor(private service: HeroService, private router: Router) { }

  ngOnInit() {
  }

  onClickSearch() {
    if (this.name === '') {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/search/', this.name]);
    }
  }
}
