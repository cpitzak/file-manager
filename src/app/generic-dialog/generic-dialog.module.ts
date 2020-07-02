import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericDialogComponent } from './generic-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [GenericDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [GenericDialogComponent]
})
export class GenericDialogModule { }
