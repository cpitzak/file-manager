import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete.component';

import { DeleteRoutingModule } from './delete-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DeleteComponent],
  imports: [CommonModule, SharedModule, DeleteRoutingModule]
})
export class DeleteModule { }
