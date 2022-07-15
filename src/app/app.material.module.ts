import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
@NgModule({

  imports: [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule
  ]
})
export class AppMaterialModule { }