import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveJobsAddComponent } from './live-jobs-add.component';

describe('LiveJobsAddComponent', () => {
  let component: LiveJobsAddComponent;
  let fixture: ComponentFixture<LiveJobsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveJobsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveJobsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
