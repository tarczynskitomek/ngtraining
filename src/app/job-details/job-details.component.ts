import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {JobService} from "../service/job.service";
import {Job} from "../service/job";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job: Job;

  constructor(private readonly route: ActivatedRoute,
              private readonly jobService: JobService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(jobId => this.jobService.getJob(jobId))
    ).subscribe(job => this.job = job);
  }
}
