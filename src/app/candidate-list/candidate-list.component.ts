import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Candidate} from "../service/candidate";
import {CandidateService} from "../service/candidate.service";
import {LazyLoadEvent} from "primeng/api";
import {Page} from "../service/page";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";
import {filter, first, map, pluck, skip, switchMap, takeUntil} from "rxjs/operators";
import {Job} from "../service/job";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit, OnDestroy {
  private readonly destroyed$ = new Subject();
  private readonly lazyLoaded$ = new Subject<LazyLoadEvent>();

  @Input()
  job: Job;

  PAGE_SIZE = 10;

  page: Page<Candidate>;

  loading = true;

  constructor(private readonly candidateService: CandidateService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
  }

  ngOnInit() {
    this.updateUrl();
    this.updatePageOnUrlChanges();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onLoad(event: LazyLoadEvent): void {
    this.lazyLoaded$.next(event);
  }

  private updateUrl() {
    this.lazyLoaded$.pipe(
      skip(1),
      pluck('first'),
      map((firstElement: number) => firstElement / this.PAGE_SIZE),
      filter(page => page != this.page.number),
      takeUntil(this.destroyed$),
    ).subscribe(page => {
      this.loading = true;
      const queryParams = {page};
      this.router.navigate([], {queryParams, queryParamsHandling: 'merge'});
    });
  }

  private updatePageOnUrlChanges() {
    this.activatedRoute.queryParams.pipe(
      pluck('page'),
      map(page => page ? Number(page) : 0),
      switchMap(page => this.candidateService.getCandidates(page, this.PAGE_SIZE, this.job)),
    ).subscribe(candidatesPage => {
      this.page = candidatesPage;
      this.loading = false;
    });
  }
}
