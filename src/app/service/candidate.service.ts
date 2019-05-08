import {Injectable} from '@angular/core';
import {Candidate} from "./candidate";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private readonly candidates: Candidate[] = [
    { id: 1, firstName: 'Joe', lastName: 'Doe'},
    { id: 2, firstName: 'Jan', lastName: 'Kowalski'},
    { id: 3, firstName: 'Piotr', lastName: 'Piotrowski'},
  ];

  constructor() { }

  getCandidates(): Observable<Candidate[]> {
    return of(this.candidates);
  }
}
