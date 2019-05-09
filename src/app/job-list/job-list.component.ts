import {Component, OnInit} from '@angular/core';
import {JobService} from "../service/job.service";
import {Subject} from "rxjs";
import {Job} from "../service/job";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  PAGE_SIZE = 10;

  jobs$ = new Subject<Job[]>();

  currentPage: number;
  totalElements: number;

  constructor(private readonly jobService: JobService) {
  }

  ngOnInit() {
  }

  onLoad(event: LazyLoadEvent) {
    this.jobService.getJobs(event.first / this.PAGE_SIZE, this.PAGE_SIZE)
      .subscribe(jobsPage => {
        this.currentPage = jobsPage.number;
        this.totalElements = jobsPage.totalElements;
        this.jobs$.next(jobsPage.items);
      });
  }

}
