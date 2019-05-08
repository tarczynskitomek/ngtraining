import {Injectable} from '@angular/core';
import {Job} from "./job";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private readonly jobs: Job[] = [
    {id: 1, code: 'JJ1', name: 'Junior Java Developer', description: 'Lorem ipsum', validFrom: '01.01.2019'},
    {id: 2, code: 'SJ1', name: 'Senior Java Developer', description: 'Lorem ipsum', validFrom: '05.01.2019'},
    {id: 3, code: 'JR1', name: 'Junior React Developer', description: 'Lorem ipsum', validFrom: '21.05.2019'},
    {id: 4, code: 'SR1', name: 'Senior React Developer', description: 'Lorem ipsum', validFrom: '01.11.2018'},
  ];

  constructor() {
  }

  getJobs(): Observable<Job[]> {
    return of(this.jobs);
  }
}
