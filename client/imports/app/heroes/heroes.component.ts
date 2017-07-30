import { Component } from "@angular/core";
import template from "./heroes.component.html";
import style from "./heroes.component.scss";
import { Hero } from '../../../../both/models/hero.model';
import { OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HeroService } from '../heroservice/hero.service';
import { Router } from "@angular/router";

@Component({
  selector: "heroes",
  template,
  styles: [ style ],
})
export class HeroesComponent implements OnInit {

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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  constructor(private router: Router,
              private heroService: HeroService) { }

}
