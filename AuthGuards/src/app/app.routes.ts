import { Routes } from '@angular/router';
import { Home } from './canactive/home/home';
import { Login } from './canactive/login/login';
import { Dashboard } from './canactive/dashboard/dashboard';
import { DashboardHomechild } from './canactivechild/dashboard-homechild/dashboard-homechild';
import { DashboardHomechildReports } from './canactivechild/dashboard-homechild-reports/dashboard-homechild-reports';
import { DashboardChild } from './canactivechild/dashboard-child/dashboard-child';
import { canmatchGuard } from './canmatch-guard';
import { canactivechildGuard } from './canactivechild-guard';
import { canactiveGuard } from './canactive-guard';
import { candeactivateGuard } from './candeactivate-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  {
    path: 'dashboard',
    component: Dashboard,
    canMatch: [canmatchGuard], //step1: route match checking
    canActivate: [canactiveGuard], //step2: route activation check
    canActivateChild: [canactivechildGuard], //step3: child route activation
    canDeactivate: [candeactivateGuard], //step4: exit confirmation
    children: [
      { path: '', component: DashboardHomechild },
      { path: 'reports', component: DashboardHomechildReports },
      { path: 'child', component: DashboardChild },
    ],
  },
  { path: '**', redirectTo: '' },
];
