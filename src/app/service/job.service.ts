import {Injectable} from '@angular/core';
import {Job} from "./job";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {Page} from "./page";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getJobs(page = 0, pageSize = 10): Observable<Page<Job>> {
    const params = new HttpParams()
      .append('page', page.toString())
      .append('size', pageSize.toString());
    return this.httpClient.get('/jobs', {params}).pipe(
      tap(data => console.log(data)),
      map((data: any) => new Page(
        data._embedded.jobs,
        data.page.number,
        data.page.size,
        data.page.totalElements
      )),
    );
  }

  getJob(id: number): Observable<Job> {
    return this.httpClient.get<Job>(`/jobs/${id}`);
  }

  addJob(job: Job): Observable<void> {
    return this.httpClient.post<void>('/jobs', job);
  }
}
