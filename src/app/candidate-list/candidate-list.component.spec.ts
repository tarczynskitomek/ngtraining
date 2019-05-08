import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CandidateListComponent} from './candidate-list.component';
import {TableModule} from "primeng/table";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CandidateListComponent', () => {
  let component: CandidateListComponent;
  let fixture: ComponentFixture<CandidateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TableModule,
        HttpClientTestingModule,
      ],
      declarations: [CandidateListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
