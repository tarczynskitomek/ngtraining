import {Component, OnInit} from '@angular/core';
import {JobService} from "../service/job.service";
import {Observable} from "rxjs";
import {Job} from "../service/job";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs$: Observable<Job[]>;

  constructor(private readonly jobService: JobService) {
  }

  ngOnInit() {
    this.jobs$ = this.jobService.getJobs();
  }

}
