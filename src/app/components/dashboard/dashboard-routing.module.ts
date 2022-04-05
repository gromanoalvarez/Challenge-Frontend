import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

// app-routing  me redirige aqui por medio del importe y la promesa:
//  { path: 'dashboard', loadChildren: () => import ('./components/dashboard/dashboard.module').then(x=>x.DashboardModule) },
const routes: Routes = [
  {path: '', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
