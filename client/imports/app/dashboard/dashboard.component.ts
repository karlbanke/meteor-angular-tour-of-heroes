import {Component, OnInit} from '@angular/core';
import template from './dashboard.component.html';
import { HeroService } from '../heroservice/hero.service';
import {Hero} from "../../../../both/models/hero.model";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'my-dashboard',
    template
})
export class DashboardComponent implements OnInit {

    heroes:  Observable<Hero[]>;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroes = this.heroService.getTopHeroes();
    }
}
