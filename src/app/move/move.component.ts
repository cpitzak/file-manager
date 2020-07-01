import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';

import { Tab } from './model/tab';

import * as utils from '../core/model/utilities/utils';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
  @ViewChild('matTabsGroup') matTabsGroup: MatTabGroup;
  tabs: Tab[] = [
    {
      taskName: 'Organize Desktop'
    }
  ];
  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onDuplicateTab(taskName: string) {
    if (taskName == null || taskName.trim().length === 0) {
      return;
    }
    taskName = taskName.trim();
    const existing: string[] = this.tabs.reduce(function(a, c) {
      return a.concat(c.taskName);
    }, []);
    const newTaskName: string = utils.duplicateName(taskName, existing);
    const newTab: Tab = {
      taskName: newTaskName
    }
    this.tabs.push(newTab);
    this.matTabsGroup.selectedIndex = this.tabs.length - 1;
  }

  onRemoveTab(index: number) {
    if (index == null && index > 0 && index < this.tabs.length) {
      return;
    }
    this.tabs.splice(index, 1);
  }

  onSave(tab: Tab) {
    if (tab == null) {
      return;
    }
    tab.taskName = tab.taskName.trim();
  }

}
