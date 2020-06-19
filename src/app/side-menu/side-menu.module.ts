import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
