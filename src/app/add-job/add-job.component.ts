import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {JobService} from "../service/job.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  addForm = this.formBuilder.group({
    code: [''],
    name: [''],
    description: [''],
    validFrom: ['']
  });

  constructor(private readonly formBuilder: FormBuilder,
              private readonly jobService: JobService,
              private readonly router: Router) { }

  ngOnInit() {
  }

  addJob() {
    this.jobService
      .addJob(this.addForm.value)
      .subscribe(() => this.router.navigateByUrl('/jobs'));
  }
}
