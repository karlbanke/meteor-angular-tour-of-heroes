import { Component } from '@angular/core';
import style from './app.component.scss'
@Component({
    selector: 'app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: [ style ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
