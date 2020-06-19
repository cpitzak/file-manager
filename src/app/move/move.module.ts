import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoveComponent } from './move.component';

import { MoveRoutingModule } from './move-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MoveComponent],
  imports: [CommonModule, SharedModule, MoveRoutingModule]
})
export class MoveModule { }
