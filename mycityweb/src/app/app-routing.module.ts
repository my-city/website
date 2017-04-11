import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityComponent } from './components/city/city.component';
import { TrailListComponent } from './components/trail/trail-list.component';
import { TrailDetailComponent } from './components/trail/trail-detail.component';
import { NewTrailComponent } from './components/trail/new-trail.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'area/:id/:title', component: CityComponent },
  { path: 'area/:id/trails', component: TrailListComponent },
  { path: 'trail/:id/:title', component: TrailDetailComponent },
  { path: 'trail/new', component: NewTrailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}