import { Injectable } from '@angular/core';

import { Tab } from '../../model/tab';

@Injectable({
  providedIn: 'root'
})
export class MoveTabService {
  tabs: Tab[] = [];
  constructor() { }
}
