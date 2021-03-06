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
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatTooltipModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatTooltipModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    FooterComponent
  ]
})
export class SharedModule { }
