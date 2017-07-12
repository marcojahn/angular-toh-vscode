import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';

@Component({
  selector: 'toh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then((heroes) => {this.heroes = heroes})
      .catch((err) => {console.log('error getHeroes', err)});
  }
}
