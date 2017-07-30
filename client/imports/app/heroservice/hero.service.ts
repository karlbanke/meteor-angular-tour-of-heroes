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

    public getHero(id): Hero {
        return HeroCollection.findOne({"id": id});
    }

    public update(hero: Hero): Promise<number> {
        return HeroCollection.update({"_id": hero._id}, hero).toPromise();
    }

    public delete(hero: Hero) {
        HeroCollection.remove({"_id": hero._id});
    }

    public add(name: string) {
        let id: Mongo.ObjectID = new Mongo.ObjectID;
        HeroCollection.insert({"_id": id.toString(), "id": 0, "name": name});
    }

    public search(term: string): ObservableCursor<Hero> {
        return HeroCollection.find({ "name": "Narco"})
    }
}