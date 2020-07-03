import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RunRuleModule } from '../../run-rule/run-rule.module';
import { NgControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { OpenFolderModule } from '../../open-folder/open-folder.module';
import { TaskNameInputModule } from '../../task-name-input/task-name-input.module';
import { RulesModule } from '../../rules/rules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async(() => {
    const NG_CONTROL_PROVIDER = {
      provide: NgControl,
      useClass: class extends NgControl {
      control = new FormControl();
      viewToModelUpdate() {}
      }
    };
    TestBed.configureTestingModule({
      declarations: [ TaskFormComponent ],
      providers: [NgControl],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RunRuleModule,
        MatDialogModule,
        MatButtonModule,
        OpenFolderModule,
        TaskNameInputModule,
        RulesModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot()
      ],
    })
    .overrideComponent(TaskFormComponent, {
      add: { providers: [NG_CONTROL_PROVIDER] },
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
