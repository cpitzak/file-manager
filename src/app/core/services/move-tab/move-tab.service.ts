import { Injectable } from '@angular/core';

import { Tab } from '../../model/tab';

@Injectable({
  providedIn: 'root'
})
export class MoveTabService {
  selectedIndex: number = 0;
  tabs: Tab[] = [];
  constructor() { }

  clear() {
    this.selectedIndex = 0;
    this.tabs = [];
  }
}
