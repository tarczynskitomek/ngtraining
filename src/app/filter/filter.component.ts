import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, filter, first, map, pluck, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private destroyed$ = new Subject();

  input = new FormControl();

  constructor(private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.initializeValue();
    this.updateUrl();
  }

  private updateUrl() {
    this.input.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(filterPhrase => filterPhrase.length === 0 || filterPhrase.length >= 3),
      map(searchPhrase => ({filter: searchPhrase || null})),
      takeUntil(this.destroyed$),
    ).subscribe(queryParams => this.router.navigate([], {queryParams, queryParamsHandling: 'merge'}))
  }

  private initializeValue() {
    this.activatedRoute.queryParams.pipe(
      first(),
      pluck('filter'),
      filter(filterPhrase => !!filterPhrase),
    ).subscribe(filterPhrase => this.input.setValue(filterPhrase));
  }
}
