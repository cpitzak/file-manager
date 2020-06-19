import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { MoveRoutingModule } from './move/move-routing.module';
import { DeleteRoutingModule } from './delete/delete-routing.module';
import { LogsRoutingModule } from './logs/logs-routing.module';
import { SavedRoutingModule } from './saved/saved-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'move',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MoveRoutingModule,
    DeleteRoutingModule,
    LogsRoutingModule,
    SavedRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
