import {Injectable} from '@angular/core';
import {Candidate} from "./candidate";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {Page} from "./page";
import {Job} from "./job";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getCandidates(page: number, pageSize: number, job: Job | null): Observable<Page<Candidate>> {
    let params = this.buildParams(page, pageSize);
    let resourcePath = '/candidates';
    if (job) {
      params = params.append('jobId', job.id.toString());
      resourcePath += '/search/findByJobId';
    }
    return this.httpClient.get<Candidate[]>(resourcePath, { params })
      .pipe(
        tap(data => console.log(data)),
        map((data: any) => new Page(
          data._embedded.candidates,
          data.page.number,
          data.page.size,
          data.page.totalElements
        )),
      );
  }

  private buildParams(page: number, pageSize: number) {
    return new HttpParams()
      .append('page', page.toString())
      .append('size', pageSize.toString());
  }
}
