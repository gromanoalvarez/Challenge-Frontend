import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { PresentationComponent } from './components/presentation/presentation.component';

//Corre con <router-outlet/>
const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
