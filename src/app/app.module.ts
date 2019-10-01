import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from "@angular/router";
import {ROUTES} from "../../app.routes";
import { ProfilCompoComponent } from './profil-compo/profil-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilCompoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
