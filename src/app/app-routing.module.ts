import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {CandidateListComponent} from "./candidate-list/candidate-list.component";
import {JobListComponent} from "./job-list/job-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {JobDetailsComponent} from "./job-details/job-details.component";
import {AddJobComponent} from "./add-job/add-job.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'candidates', component: CandidateListComponent},
  {
    path: 'jobs', component: JobListComponent, children: [
      {path: 'add', component: AddJobComponent}
    ]
  },
  {path: 'jobs/:id', component: JobDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
