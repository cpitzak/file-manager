import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoveTask } from '../../core/model/task/move-task';
import { Tab } from '../model/tab';
import { Folder } from '../../core/model/task/folder';
import { validateSourceFolder } from '../../open-folder/validators/source-folder-validator';
import { OpenFolderOpts } from '../../open-folder/open-folder.component';
import { TaskRules } from '../../core/model/task/task-rules';

export enum FormName {
  TaskName = 'taskName',
  SourceFolder = 'sourceFolder',
  DestinationFolder = 'destinationFolder',
  TaskRules = 'taskRules',
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

  // only for initial form load. Use this.form to read and set values for task rules
  initialSourceFolder: Folder = {
    name: '',
    includeSubfolders: false
  };

  // only for initial form load. Use this.form to read and set values for task rules
  initialDestinationFolder: Folder = {
    name: '',
    putInSubfolder: false
  };

  initialRules: TaskRules = {
    imageFiles: false,
    documentFiles: false,
    videoFiles: false,
    audioFiles: false,
    fileMatch: {
      checked: false,
      matcher: undefined
    },
  }

  form: FormGroup = new FormGroup({
    [FormName.TaskName]: new FormControl('',
    [Validators.required]),
    [FormName.SourceFolder]: new FormControl(this.initialSourceFolder,
      [Validators.required, validateSourceFolder]),
    [FormName.DestinationFolder]: new FormControl(this.initialDestinationFolder,
      [Validators.required, validateSourceFolder]),
    [FormName.TaskRules]: new FormControl(this.initialRules,
      [Validators.required]),
  });

  get taskName(): string {
    return this.form.controls[FormName.TaskName].value?.trim();
  }

  FormName = FormName;
  sourceFolderOpts: OpenFolderOpts = { openFolderPlaceholder: 'Source Folder', showIncludeSubfolder: true };
  destinationFolderOpts: OpenFolderOpts = { openFolderPlaceholder: 'Destination Folder', showPutInSubfolder: true };

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
