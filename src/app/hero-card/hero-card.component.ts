import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() heros: any;
  @Output() heroDetail: EventEmitter<any> = new EventEmitter();
  constructor(private service: HeroService, private route: ActivatedRoute, private router: Router) { }
  heroList: any;

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.service.getHero(url[1].path).subscribe(data => this.heroList = data);
    });
  }

  onClickDetail(id: string) {
    this.router.navigate(['/detail/', id]);
  }
}
