import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunRuleComponent } from './run-rule.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [RunRuleComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [RunRuleComponent]
})
export class RunRuleModule { }
