import { Injectable } from '@angular/core';
import { TaskManager } from '../../model/task/task-manager';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  taskManger: TaskManager = new TaskManager();

  constructor() { }
}
