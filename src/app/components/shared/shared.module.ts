import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material:
// Como estos modulos se van a usar desde el principal app.module.ts entonces debo tambien exportarlos
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
