import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCompanyComponent } from './total-company.component';

describe('TotalCompanyComponent', () => {
  let component: TotalCompanyComponent;
  let fixture: ComponentFixture<TotalCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
