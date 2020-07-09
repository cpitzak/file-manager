import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MoveTask } from "../../core/model/task/move-task";
import { Tab } from "../../core/model/tab";
import { Folder } from "../../core/model/task/folder";
import { validateSourceFolder } from "../../open-folder/validators/source-folder-validator";
import { OpenFolderOpts } from "../../open-folder/open-folder.component";
import { TaskRules } from "../../core/model/task/task-rules";
import { FileMatch } from "../../core/model/task/file-match.enum";
import { validateRules } from "../../rules/validators/rules-validator";
import { validateTaskNameInput } from "../../task-name-input/validators/task-name-input-validator";
import { Subscription } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { GenericDialogComponent } from "../../generic-dialog/generic-dialog.component";
import { GenericDialogData } from "../../generic-dialog/model/generic-dialog-data";
import { TranslateService } from "@ngx-translate/core";

export enum FormName {
  TaskName = "taskName",
  SourceFolder = "sourceFolder",
  DestinationFolder = "destinationFolder",
  TaskRules = "taskRules",
  OnStartup = "onStartup",
}

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"],
})
export class TaskFormComponent implements OnInit, OnDestroy {
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
    name: "",
    includeSubfolders: false,
  };

  // only for initial form load. Use this.form to read and set values for task rules
  initialDestinationFolder: Folder = {
    name: "",
    putInSubfolder: false,
  };

  initialRules: TaskRules = {
    imageFiles: false,
    documentFiles: false,
    videoFiles: false,
    audioFiles: false,
    fileMatch: {
      checked: false,
      regex: FileMatch.Matches,
      text: "",
    },
  };

  form: FormGroup = new FormGroup({
    [FormName.TaskName]: new FormControl("", [validateTaskNameInput]),
    [FormName.SourceFolder]: new FormControl(this.initialSourceFolder, [validateSourceFolder]),
    [FormName.DestinationFolder]: new FormControl(this.initialDestinationFolder, [validateSourceFolder]),
    [FormName.TaskRules]: new FormControl(this.initialRules, [validateRules]),
    [FormName.OnStartup]: new FormControl(false),
  });

  get taskName(): string {
    return this.form.controls[FormName.TaskName].value?.trim();
  }

  FormName = FormName;
  valueChanges: Subscription;
  sourceFolderOpts: OpenFolderOpts;
  destinationFolderOpts: OpenFolderOpts;

  constructor(public dialog: MatDialog, private tanslateService: TranslateService) {
  }

  ngOnInit(): void {
    this.sourceFolderOpts = {
      openFolderPlaceholder: this.tanslateService.instant("MOVE.TASK_FORM.SOURCE_FOLDER"),
      showIncludeSubfolder: true,
    };
    this.destinationFolderOpts = {
      openFolderPlaceholder: this.tanslateService.instant("MOVE.TASK_FORM.DESTINATION_FOLDER"),
      showPutInSubfolder: true,
    };
    // this will change the original that got pasted in so that the Tab will show the changes
    this.valueChanges = this.form.get(FormName.TaskName).valueChanges.subscribe((name: string) => {
      this.tab.taskName = name;
    });
  }

  ngOnDestroy(): void {
    this.valueChanges.unsubscribe();
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
    const sourceFolder: Folder = this.form.value[FormName.SourceFolder];
    const destinationFolder: Folder = this.form.value[FormName.DestinationFolder];
    const taskRules: TaskRules = this.form.value[FormName.TaskRules];
    const runOnStartup: boolean = this.form.value[FormName.OnStartup];
    const task: MoveTask = new MoveTask(this.taskName, sourceFolder, destinationFolder, taskRules, runOnStartup);
    this.save.emit(task);
  }

  onOpenedFolder(name: string, formName: FormName) {
    const sourceFolder: Folder = this.form.value[FormName.SourceFolder];
    const destinationFolder: Folder = this.form.value[FormName.DestinationFolder];
    if (sourceFolder.name.length > 0 && sourceFolder.name === destinationFolder.name) {
      this.openSameFolderNameDialog();
    }
  }

  openSameFolderNameDialog() {
    const data: GenericDialogData = {
      title: "Warning",
      acceptButton: {
        enabled: false,
      },
      rejectButton: {
        enabled: true,
        focus: true,
        text: "Close",
      },
      innerHtml: "Your source folder and destination folder cannot be the same. Please try again.",
    };
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      const sourceFolder: Folder = this.form.value[FormName.SourceFolder];
      const destinationFolder: Folder = this.form.value[FormName.DestinationFolder];
      sourceFolder.name = "";
      destinationFolder.name = "";
      this.form.controls[FormName.SourceFolder].setValue(sourceFolder);
      this.form.controls[FormName.DestinationFolder].setValue(destinationFolder);
    });
  }
}
