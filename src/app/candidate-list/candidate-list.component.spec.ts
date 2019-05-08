import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CandidateListComponent} from './candidate-list.component';
import {TableModule} from "primeng/table";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";

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

  it('should render candidates list', async(() => {
    component.candidates$ = of([
      {id: 1, firstName: 'Joe', lastName: 'Doe'},
    ]);
    fixture.detectChanges();

    const tableEl = fixture.nativeElement.querySelector('.ui-table');
    expect(tableEl).toBeTruthy();

    const headerElements = fixture.debugElement.queryAll(By.css('th'));
    expect(headerElements).toBeTruthy();
    expect(headerElements.length).toBe(2);

    const rawElements = fixture.debugElement.queryAll(By.css('tr'));
    expect(rawElements.length).toBe(2);
    expect(rawElements[1].nativeElement.innerText).toContain('Joe')
    expect(rawElements[1].nativeElement.innerText).toContain('Doe')
  }));
});
