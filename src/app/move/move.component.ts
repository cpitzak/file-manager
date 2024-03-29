import { Component, OnInit, ViewChild } from '@angular/core';

import { Tab } from '../core/model/tab';

import * as fromUtils from '../core/model/utilities/utils';
import { MatTabGroup } from '@angular/material/tabs';
import { TaskManagerService } from '../core/services/task-manager/task-manager.service';
import { MoveTabService } from '../core/services/move-tab/move-tab.service';
import { MoveTask } from '../core/model/task/move-task';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogData } from '../generic-dialog/model/generic-dialog-data';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'app/core/model/task/task';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
  @ViewChild('matTabsGroup') matTabsGroup: MatTabGroup;
  constructor(public dialog: MatDialog, private taskManagerService: TaskManagerService, public moveTabService: MoveTabService,
    private tanslateService: TranslateService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const taskId: string = this.route.snapshot.params['task-id'];
    const task: Task = this.taskManagerService.taskManger.getTaskById(taskId);
    if (task != null) {
      const tabIndex: number = this.moveTabService.tabs.findIndex((tab: Tab) => {
        return tab?.initialTask?.id === task.id;
      });
      if (tabIndex < 0) {
        this.moveTabService.tabs.push({
          taskName: task.name,
          editsOn: true,
          initialTask: task
        });
        this.moveTabService.selectedIndex = this.moveTabService.tabs.length - 1;
      } else {
        this.moveTabService.selectedIndex = tabIndex;
      }
    } else if (this.moveTabService.tabs.length === 0) {
      this.initTabs();
    }
  }

  onNewTab(taskName: string) {
    if (taskName == null || taskName.trim().length === 0) {
      return;
    }
    taskName = taskName.trim();
    const existing: string[] = this.moveTabService.tabs.reduce(function(a, c) {
      return a.concat(c.taskName);
    }, []);
    existing.concat(this.taskManagerService.taskManger.getTaskNames());
    const newTaskName: string = fromUtils.newName(taskName, existing);
    const newTab: Tab = {
      taskName: newTaskName,
    }
    this.moveTabService.tabs.push(newTab);
    this.matTabsGroup.selectedIndex = this.moveTabService.tabs.length - 1;
  }

  onRemoveTab(index: number) {
    if (index == null && index > 0 && index < this.moveTabService.tabs.length) {
      return;
    }
    this.moveTabService.tabs.splice(index, 1);
  }

  onSave(moveTask: MoveTask) {
    const success: boolean = this.taskManagerService.taskManger.add(moveTask);
    if (success) {
      this.openSaveCompletedDialog();
    }
  }

  openSaveCompletedDialog() {
    const data: GenericDialogData = {
      title: this.tanslateService.instant('MOVE.TASK_FORM.SAVE_SUCCESS'),
      acceptButton: {
        enabled: false,
      },
      rejectButton: {
        enabled: true,
        focus: true,
        text: this.tanslateService.instant('MOVE.TASK_FORM.CLOSE'),
      },
      innerHtml: this.tanslateService.instant('MOVE.TASK_FORM.SAVE_COMPLETE'),
    };
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.initTabs();
    });
  }

  private initTabs() {
    this.moveTabService.clear();
    const existingTaskNames: string[] = this.taskManagerService.taskManger.getTaskNames();
    const taskName: string = fromUtils.newName(this.tanslateService.instant("MOVE.NEW_TASK_NAME"), existingTaskNames);
    this.moveTabService.tabs.push({
      taskName,
    });
  }

}
