import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './delete.component';

const routes: Routes = [
  {
    path: 'delete',
    component: DeleteComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteRoutingModule {}
