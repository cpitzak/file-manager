import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenFolderComponent } from './open-folder.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [OpenFolderComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [OpenFolderComponent]
})
export class OpenFolderModule { }
