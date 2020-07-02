import { Component, OnInit, ViewChild } from '@angular/core';

import { Tab } from '../core/model/tab';

import * as fromUtils from '../core/model/utilities/utils';
import { MatTabGroup } from '@angular/material/tabs';
import { TaskManagerService } from '../core/services/task-manager/task-manager.service';
import { MoveTabService } from '../core/services/move-tab/move-tab.service';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
  @ViewChild('matTabsGroup') matTabsGroup: MatTabGroup;
  constructor(private taskManagerService: TaskManagerService, public moveTabService: MoveTabService) { }

  ngOnInit(): void {
    const existingTaskNames: string[] = this.taskManagerService.taskManger.getTaskNames();
    const taskName: string = fromUtils.newName('My New Task', existingTaskNames);
    this.moveTabService.tabs.push({
      taskName
    });
  }

  onNewTab(taskName: string) {
    if (taskName == null || taskName.trim().length === 0) {
      return;
    }
    taskName = taskName.trim();
    const existing: string[] = this.moveTabService.tabs.reduce(function(a, c) {
      return a.concat(c.taskName);
    }, []);
    const newTaskName: string = fromUtils.newName(taskName, existing);
    const newTab: Tab = {
      taskName: newTaskName
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

  onSave(tab: Tab) {
    if (tab == null) {
      return;
    }
    tab.taskName = tab.taskName.trim();
  }

}
