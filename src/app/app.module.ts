import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {HeaderComponent} from './header/header.component';
import {CandidateListComponent} from './candidate-list/candidate-list.component';
import {JobListComponent} from './job-list/job-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {MenuModule} from "primeng/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CandidateListComponent,
    JobListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
