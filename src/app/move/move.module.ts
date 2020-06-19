import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoveComponent } from "./move.component";
import { MatTabsModule } from "@angular/material/tabs";

import { MoveRoutingModule } from "./move-routing.module";
import { SharedModule } from "../shared/shared.module";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [MoveComponent],
  imports: [
    CommonModule,
    SharedModule,
    MoveRoutingModule,
    MatTabsModule,
    MatButtonModule
  ],
})
export class MoveModule {}
