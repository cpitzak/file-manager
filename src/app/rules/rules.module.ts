import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './rules.component';
import {MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [RulesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports: [RulesComponent]
})
export class RulesModule { }
