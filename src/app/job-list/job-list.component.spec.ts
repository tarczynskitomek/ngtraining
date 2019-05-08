import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JobListComponent} from './job-list.component';
import {TableModule} from "primeng/table";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('JobListComponent', () => {
  let component: JobListComponent;
  let fixture: ComponentFixture<JobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TableModule,
        HttpClientTestingModule,
      ],
      declarations: [JobListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
