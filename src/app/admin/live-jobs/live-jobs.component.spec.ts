import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveJobsComponent } from './live-jobs.component';

describe('LiveJobsComponent', () => {
  let component: LiveJobsComponent;
  let fixture: ComponentFixture<LiveJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
