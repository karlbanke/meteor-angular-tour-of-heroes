import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import template from "./hero-detail.component.html";
import { Hero } from '../../../../both/models/hero.model';
import {HeroService} from "../heroservice/hero.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import style from './hero-detail.component.scss'

@Component({
    selector: 'hero-detail',
    template: template,
    styles: [ style ]
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => this.hero = this.heroService.getHero(+params['id']));
    }


    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero).then(() => this.goBack());
    }

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
}
