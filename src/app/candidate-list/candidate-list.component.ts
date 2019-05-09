import {Component, OnInit} from '@angular/core';
import {Candidate} from "../service/candidate";
import {CandidateService} from "../service/candidate.service";
import {LazyLoadEvent} from "primeng/api";
import {Page} from "../service/page";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  PAGE_SIZE = 10;

  page: Page<Candidate>;

  loading = true;

  constructor(private readonly candidateService: CandidateService) {
  }

  ngOnInit() {
  }

  onLoad(event: LazyLoadEvent): void {
    this.loading = true;
    this.candidateService
      .getCandidates(event.first / this.PAGE_SIZE, this.PAGE_SIZE)
      .subscribe(candidatesPage => {
        this.page = candidatesPage;
        this.loading = false;
      });
  }

}
