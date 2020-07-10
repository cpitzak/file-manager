import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedComponent } from './saved.component';
import {MatTableModule} from '@angular/material/table';

import { SavedRoutingModule } from './saved-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SavedComponent],
  imports: [CommonModule, SharedModule, SavedRoutingModule, MatTableModule, MatCheckboxModule,
  MatButtonModule]
})
export class SavedModule { }
