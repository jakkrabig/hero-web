import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: any;
  constructor(private service: HeroService, private route: ActivatedRoute) { }

  stat: any;
  type: any;
  data: any;
  options: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getDetail(id).subscribe(data => {
      this.hero = data;

      // tslint:disable-next-line: no-string-literal
      this.stat = data['powerstats']

      this.type = 'radar';
      this.data = {
        labels: ['combat', 'durability', 'intelligence', 'power', 'speed', 'strength'],
        datasets: [
          {
            data: [
              this.stat.combat,
              this.stat.durability,
              this.stat.intelligence,
              this.stat.power,
              this.stat.speed,
              this.stat.strength
            ]
          }
        ]
      };
      this.options = {
        responsive: true,
        legend: false,
        hover: {
          animationDuration: 400,
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem, d) => {
              let label = d.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label;
            }
          }
        },
      };
    });
  }
}
