import {Injectable} from '@angular/core';
import {Job} from "./job";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {pluck} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>('/api/jobs').pipe(
      pluck('_embedded', 'jobs')
    );
  }
}
