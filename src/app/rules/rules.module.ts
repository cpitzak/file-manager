import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './rules.component';
import {MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [RulesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [RulesComponent]
})
export class RulesModule { }
