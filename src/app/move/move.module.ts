import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoveComponent } from "./move.component";
import { MatTabsModule } from "@angular/material/tabs";

import { MoveRoutingModule } from "./move-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OpenFolderModule } from "../open-folder/open-folder.module";
import { RulesModule } from "../rules/rules.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskNameInputModule } from '../task-name-input/task-name-input.module';
import { RunRuleModule } from '../run-rule/run-rule.module';

@NgModule({
  declarations: [MoveComponent, TaskFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    MoveRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    OpenFolderModule,
    FormsModule,
    ReactiveFormsModule,
    RulesModule,
    TaskNameInputModule,
    RunRuleModule,
  ],
})
export class MoveModule {}
