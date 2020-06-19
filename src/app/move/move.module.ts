import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoveComponent } from "./move.component";
import { MatTabsModule } from "@angular/material/tabs";

import { MoveRoutingModule } from "./move-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [MoveComponent],
  imports: [
    CommonModule,
    SharedModule,
    MoveRoutingModule,
    MatTabsModule
  ],
})
export class MoveModule {}
