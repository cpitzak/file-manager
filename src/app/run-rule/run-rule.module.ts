import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunRuleComponent } from './run-rule.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [RunRuleComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  exports: [RunRuleComponent]
})
export class RunRuleModule { }
