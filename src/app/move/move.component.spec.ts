import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveComponent } from './move.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { OpenFolderModule } from '../open-folder/open-folder.module';
import { RulesModule } from '../rules/rules.module';
import { TaskNameInputModule } from '../task-name-input/task-name-input.module';
import { RunRuleModule } from '../run-rule/run-rule.module';
import { GenericDialogModule } from '../generic-dialog/generic-dialog.module';
import { MoveRoutingModule } from './move-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskFormComponent } from './task-form/task-form.component';
import { TranslateModule } from '@ngx-translate/core';

describe('MoveComponent', () => {
  let component: MoveComponent;
  let fixture: ComponentFixture<MoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule,
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
        MatDialogModule,
        GenericDialogModule,
        BrowserAnimationsModule,
        GenericDialogModule,
        TranslateModule.forRoot() ],
      declarations: [ MoveComponent, TaskFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
