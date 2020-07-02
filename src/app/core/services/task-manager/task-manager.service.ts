import { Injectable } from '@angular/core';
import { TaskManager } from '../../model/task/task-manager';
import { MoveTask } from '../../model/task/move-task';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  taskManger: TaskManager = new TaskManager();

  constructor() {
   }
}
