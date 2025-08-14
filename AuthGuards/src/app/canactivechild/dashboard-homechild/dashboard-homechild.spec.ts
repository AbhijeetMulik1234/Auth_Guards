import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomechild } from './dashboard-homechild';

describe('DashboardHomechild', () => {
  let component: DashboardHomechild;
  let fixture: ComponentFixture<DashboardHomechild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHomechild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHomechild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
