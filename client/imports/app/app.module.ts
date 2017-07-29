import { NgModule } from "@angular/core";
import { BrowserModule }   from "@angular/platform-browser";
import { AppComponent }    from "./app.component";
import { DemoComponent }   from "./demo/demo.component";
import { DemoDataService } from "./demo/demo-data.service";
import { FormsModule }     from '@angular/forms';

import { HeroDetailComponent } from './herodetail/hero-detail.component';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DemoComponent,
    HeroDetailComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    DemoDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
