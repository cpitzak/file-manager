import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskNameInputComponent } from './task-name-input.component';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TaskNameInputComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [TaskNameInputComponent]
})
export class TaskNameInputModule { }
