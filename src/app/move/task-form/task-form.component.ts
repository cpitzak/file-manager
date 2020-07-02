import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoveTask } from '../../core/model/task/move-task';
import { Tab } from '../model/tab';
import { Folder } from '../../core/model/task/folder';
import { validateSourceFolder } from '../../open-folder/validators/source-folder-validator';
import { OpenFolderOpts } from '../../open-folder/open-folder.component';
import { TaskRules } from '../../core/model/task/task-rules';
import { FileMatch } from '../../core/model/task/file-match.enum';
import { validateRules } from '../../rules/validators/rules-validator';
import { validateTaskNameInput } from '../../task-name-input/validators/task-name-input-validator';

export enum FormName {
  TaskName = 'taskName',
  SourceFolder = 'sourceFolder',
  DestinationFolder = 'destinationFolder',
  TaskRules = 'taskRules',
  OnStartup = 'onStartup',
}

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() newTask = new EventEmitter<string>();
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
      regex: FileMatch.Matches,
      text: '',
    },
  }

  form: FormGroup = new FormGroup({
    [FormName.TaskName]: new FormControl('',
    [validateTaskNameInput]),
    [FormName.SourceFolder]: new FormControl(this.initialSourceFolder,
      [validateSourceFolder]),
    [FormName.DestinationFolder]: new FormControl(this.initialDestinationFolder,
      [validateSourceFolder]),
    [FormName.TaskRules]: new FormControl(this.initialRules,
      [validateRules]),
    [FormName.OnStartup]: new FormControl(false)
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

  onNewTask() {
    if (this.taskName == null || this.taskName.length === 0) {
      return;
    }
    this.newTask.emit(this.taskName);
  }

  onSave() {
    if (this.form.invalid) {
      return;
    }
    const task: MoveTask = new MoveTask(this.taskName);
    this.save.emit(task);
    console.log(this.form.value);
  }

}
