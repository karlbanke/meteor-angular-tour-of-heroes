import { Component } from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.scss";
import { Hero } from '../../../both/models/hero.model';
import { HeroService } from './heroservice/hero.service';
import { OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: "app",
  template,
  styles: [ style ],
  providers: [HeroService]
})
export class AppComponent implements OnInit {

  heroes: Observable<Hero[]>;
  title = 'Tour of Heroes';
  selectedHero: Hero;

  ngOnInit() {
    this.heroes = this.heroService.getHeroes().zone();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) { }

}
