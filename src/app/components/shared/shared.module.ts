import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Utilizado para Servicios
import { HttpClientModule } from '@angular/common/http';

// Angular Material:
// Como estos modulos se van a usar desde el principal app.module.ts entonces debo tambien exportarlos
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule
  ]
})
export class SharedModule { }
