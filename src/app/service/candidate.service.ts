import {Injectable} from '@angular/core';
import {Candidate} from "./candidate";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {pluck} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private readonly resourcePath = '/api/candidates';

  constructor(private readonly httpClient: HttpClient) {
  }

  getCandidates(): Observable<Candidate[]> {
    return this.httpClient.get<Candidate[]>(this.resourcePath).pipe(
      pluck('_embedded', 'candidates')
    );
  }
}
