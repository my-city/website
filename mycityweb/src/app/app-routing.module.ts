import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityComponent } from './components/city/city.component';
import { TrailListComponent } from './components/trail/trail-list.component';
import { TrailDetailComponent } from './components/trail/trail-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'area/:id', component: CityComponent },
  { path: 'area/:id/trails', component: TrailListComponent },
  { path: 'trail/:id', component: TrailDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}