import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

//El dashboard tambien compartira los modulos de Angular Material
import { SharedModule } from '../shared/shared.module';

//Componente propio
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateComponent } from './create/create.component';
import { DialogOverviewExampleDialog } from './inicio/dialog/dialog.component'

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    CreateComponent,
    DialogOverviewExampleDialog,

  ],
  imports: [
    DashboardRoutingModule,
    SharedModule,

  ],
  exports: [
  ]
})
export class DashboardModule { }
