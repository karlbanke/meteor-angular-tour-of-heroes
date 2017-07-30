import { NgModule } from "@angular/core";
import { BrowserModule }   from "@angular/platform-browser";
import { AppComponent }    from "./app.component";
import { FormsModule }     from '@angular/forms';
import { HeroService } from './heroservice/hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './herodetail/hero-detail.component';
import { DashboardComponent}  from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    HeroService
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
