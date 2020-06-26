import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoveTask } from '../../core/model/task/move-task';
import { Tab } from '../model/tab';

export enum FormName {
  TaskName = 'taskName',
  SourceFolder = 'sourceFolder'
}

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() duplicate = new EventEmitter<string>();
  @Output() save = new EventEmitter<MoveTask>();

  _tab: Tab;
  @Input()
  set tab(t: Tab) {
    this._tab = t;
    if (this.form) {
      this.form.controls[FormName.TaskName].setValue(t.taskName);
    }
  }
  get tab(): Tab {
    return this._tab;
  }

  form: FormGroup = new FormGroup({
    [FormName.TaskName]: new FormControl('', [Validators.required]),
    [FormName.SourceFolder]: new FormControl('', [Validators.required]),
  });

  get taskName(): string {
    return this.form.controls[FormName.TaskName].value?.trim();
  }

  FormName = FormName;

  constructor() { }

  ngOnInit(): void {
    // this will change the original that got pasted in so that the Tab will show the changes
    this.form.get(FormName.TaskName).valueChanges.subscribe((name: string) => {
      this.tab.taskName = name;
    });
  }

  onDuplicateTab() {
    if (this.taskName == null || this.taskName.length === 0) {
      return;
    }
    this.duplicate.emit(this.taskName);
  }

  onSave() {
    if (this.form.invalid) {
      return;
    }
    const task: MoveTask = new MoveTask(this.taskName);
    this.save.emit(task);
  }

}
