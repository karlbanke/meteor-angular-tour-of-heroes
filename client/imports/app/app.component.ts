import { Component } from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.scss";
import { Hero } from './hero';
import { HeroService } from './heroservice/hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: "app",
  template,
  styles: [ style ],
  providers: [HeroService]
})
export class AppComponent implements OnInit {

  heroes: Hero[];
  title = 'Tour of Heroes';
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { }

}
