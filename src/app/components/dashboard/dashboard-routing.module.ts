import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';

// app-routing  me redirige aqui por medio del importe y la promesa:
//  { path: 'dashboard', loadChildren: () => import ('./components/dashboard/dashboard.module').then(x=>x.DashboardModule) },
const routes: Routes = [
  {path: '', component: DashboardComponent, children:[
    {path: '', component: InicioComponent},
    //dashboard/home
    {path: 'home', component: InicioComponent},
    //dashboard/create-post
    {path: 'create-post', component: CreateComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
