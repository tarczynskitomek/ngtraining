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
import { FilterComponent } from './filter/filter.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiPathInterceptor} from "./interceptor/api-path.interceptor";
import { JobDetailsComponent } from './job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CandidateListComponent,
    JobListComponent,
    PageNotFoundComponent,
    FilterComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiPathInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
