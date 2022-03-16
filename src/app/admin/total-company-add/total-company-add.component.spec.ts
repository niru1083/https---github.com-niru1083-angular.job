import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCompanyAddComponent } from './total-company-add.component';

describe('TotalCompanyAddComponent', () => {
  let component: TotalCompanyAddComponent;
  let fixture: ComponentFixture<TotalCompanyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCompanyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCompanyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
