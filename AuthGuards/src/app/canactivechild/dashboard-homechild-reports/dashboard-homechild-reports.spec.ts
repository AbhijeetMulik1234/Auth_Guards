import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomechildReports } from './dashboard-homechild-reports';

describe('DashboardHomechildReports', () => {
  let component: DashboardHomechildReports;
  let fixture: ComponentFixture<DashboardHomechildReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHomechildReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHomechildReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
