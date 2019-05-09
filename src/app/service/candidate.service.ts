import {Injectable} from '@angular/core';
import {Candidate} from "./candidate";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {Page} from "./page";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private readonly resourcePath = '/api/candidates';

  constructor(private readonly httpClient: HttpClient) {
  }

  getCandidates(page: number, pageSize: number): Observable<Page<Candidate>> {
    const params = this.buildParams(page, pageSize);
    return this.httpClient.get<Candidate[]>(this.resourcePath, { params })
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
