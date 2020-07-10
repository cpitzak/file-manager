import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoveComponent } from './move.component';

const routes: Routes = [
  {
    path: 'move',
    component: MoveComponent
  },
  {
    path: 'move/:task-id',
    component: MoveComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveRoutingModule {}
