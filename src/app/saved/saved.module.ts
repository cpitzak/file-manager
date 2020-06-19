import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedComponent } from './saved.component';

import { SavedRoutingModule } from './saved-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SavedComponent],
  imports: [CommonModule, SharedModule, SavedRoutingModule]
})
export class SavedModule { }
