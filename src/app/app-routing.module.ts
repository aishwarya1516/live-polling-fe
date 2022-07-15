import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PollingComponent } from './component/polling/polling.component';
import { AdminComponent } from './component/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'polling',
    component: PollingComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
