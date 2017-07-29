import { Component, Input } from '@angular/core';
import template from "./hero-detail.component.html";
import { Hero } from '../hero';

@Component({
    selector: 'hero-detail',
    template: template
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}
