import { Component, OnInit } from '@angular/core';

import { Tab } from './model/tab';

import * as utils from '../core/model/utilities/utils';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
  tabs: Tab[] = [
    {
      taskName: 'Organize Desktop'
    }
  ];
  showClose: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onDuplicateTab(tab: Tab) {
    if (tab == null || tab.taskName.trim().length === 0) {
      return;
    }
    tab.taskName = tab.taskName.trim();
    const existing: string[] = this.tabs.reduce(function(a, c) {
      return a.concat(c.taskName);
    }, []);
    const taskName: string = utils.duplicateName(tab.taskName, existing);
    const newTab: Tab = {
      taskName
    }
    this.tabs.push(newTab);
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
