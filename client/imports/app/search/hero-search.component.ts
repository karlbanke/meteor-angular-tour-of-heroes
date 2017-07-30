import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { HeroService } from '../heroservice/hero.service';
import { Hero } from '../../../../both/models/hero.model';
import style from './hero-search.component.scss';
import template from "./hero-search.component.html";
import { ObservableCursor } from "meteor-rxjs";

@Component({
    selector: 'hero-search',
    template: template,
    styles: [ style ],
    providers: [HeroService]
})
export class HeroSearchComponent implements OnInit {
    heroes: ObservableCursor <Hero>;
    private searchTerms = new Subject<string>();
    constructor(
        private heroService: HeroService,
        private router: Router) {}
    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .subscribe(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.heroes = this.heroService.search(term)
                // or the observable of empty heroes if there was no search term
                : ObservableCursor.of<Hero>());
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
