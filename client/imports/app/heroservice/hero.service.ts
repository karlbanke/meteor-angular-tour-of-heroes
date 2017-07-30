import { Injectable } from '@angular/core';
import { Hero } from '../../../../both/models/hero.model';
import { HeroCollection } from '../../../../both/collections/hero.collection';
import { ObservableCursor } from "meteor-rxjs";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HeroService {
    private data: ObservableCursor<Hero>;
    private topHeroes: ObservableCursor<Hero>;

    constructor() {
        this.data = HeroCollection.find({});
        this.topHeroes = HeroCollection.find({}, {limit: 4});
    }

    public getHeroes(): ObservableCursor<Hero> {
        return this.data;
    }

    public getTopHeroes(): ObservableCursor<Hero> {
        return this.topHeroes;
    }

    public getHero(id): Hero {
        return HeroCollection.findOne({"id": id});
    }
}