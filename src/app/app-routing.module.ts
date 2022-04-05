import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { PresentationComponent } from './components/presentation/presentation.component';

//Corre con <router-outlet/>
const routes: Routes = [
  { path: '', redirectTo: 'presentation', pathMatch:'full'},
  { path: 'presentation', component: PresentationComponent },
  // Primera opcion:
  // { path: 'dashboard', component: DashboardComponent },
  // Segunda opcion: LAZY LOAD
  { path: 'dashboard', loadChildren: () => import ('./components/dashboard/dashboard.module')
  .then(x=>x.DashboardModule) },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//49.05