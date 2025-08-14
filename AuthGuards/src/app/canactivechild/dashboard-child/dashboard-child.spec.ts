import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChild } from './dashboard-child';

describe('DashboardChild', () => {
  let component: DashboardChild;
  let fixture: ComponentFixture<DashboardChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
