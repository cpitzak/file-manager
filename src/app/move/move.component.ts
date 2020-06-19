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
  constructor() { }

  ngOnInit(): void {
  }

  onDuplicateTab(tab: Tab) {
    const existing: string[] = this.tabs.reduce(function(a, c) {
      return a.concat(c.taskName);
    }, []);
    const taskName: string = utils.duplicateName(tab.taskName, existing);
    const newTab: Tab = {
      taskName
    }
    this.tabs.push(newTab);
  }

}
