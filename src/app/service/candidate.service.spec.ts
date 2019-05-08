import {inject, TestBed} from '@angular/core/testing';

import {CandidateService} from './candidate.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('CandidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [
      CandidateService
    ]
  }));

  it('should be created', () => {
    const service: CandidateService = TestBed.get(CandidateService);
    expect(service).toBeTruthy();
  });

  it('should call httpClient to fetch candidates', inject(
    [HttpClient, CandidateService], (httpClient, candidateService) => {
      // given
      spyOn(httpClient, 'get').and.returnValue(of([
        {id: 1, firstName: 'Joe', lastName: 'Doe'}
      ]));

      // when
      const candidates = candidateService.getCandidates();

      // then
      expect(httpClient.get).toHaveBeenCalled();
      expect(candidates).toBeTruthy();
    }));
});
