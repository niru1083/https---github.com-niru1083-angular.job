import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppildeJobsComponent } from './appilde-jobs.component';

describe('AppildeJobsComponent', () => {
  let component: AppildeJobsComponent;
  let fixture: ComponentFixture<AppildeJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppildeJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppildeJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
