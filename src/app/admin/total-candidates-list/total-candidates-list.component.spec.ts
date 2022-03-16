import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCandidatesListComponent } from './total-candidates-list.component';

describe('TotalCandidatesListComponent', () => {
  let component: TotalCandidatesListComponent;
  let fixture: ComponentFixture<TotalCandidatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCandidatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCandidatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
