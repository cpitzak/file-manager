import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { SideMenuRoutingModule } from './side-menu-routing.module';
import { RouterTestingModule } from "@angular/router/testing";

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SideMenuRoutingModule,
    RouterTestingModule
  ],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
