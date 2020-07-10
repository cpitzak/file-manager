import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedComponent } from './saved.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MoveRoutingModule } from '../move/move-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OpenFolderModule } from '../open-folder/open-folder.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RulesModule } from '../rules/rules.module';
import { TaskNameInputModule } from '../task-name-input/task-name-input.module';
import { RunRuleModule } from '../run-rule/run-rule.module';
import { MatDialogModule } from '@angular/material/dialog';
import { GenericDialogModule } from '../generic-dialog/generic-dialog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskFormComponent } from '../move/task-form/task-form.component';

describe('SavedComponent', () => {
  let component: SavedComponent;
  let fixture: ComponentFixture<SavedComponent>;

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
      declarations: [ SavedComponent, TaskFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
