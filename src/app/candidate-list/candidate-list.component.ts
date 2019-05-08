import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Candidate} from "../service/candidate";
import {CandidateService} from "../service/candidate.service";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates$: Observable<Candidate[]>;

  constructor(private readonly candidateService: CandidateService) {
  }

  ngOnInit() {
    this.candidates$ = this.candidateService.getCandidates();
  }

}
