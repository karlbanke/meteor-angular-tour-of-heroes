import { Injectable } from '@angular/core';
import { Hero } from '../../../../both/models/hero.model';
import { HeroCollection } from '../../../../both/collections/hero.collection';
import { ObservableCursor } from "meteor-rxjs";

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
}