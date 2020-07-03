import { Injectable } from '@angular/core';
import { TaskManager } from '../../model/task/task-manager';
import { MoveTask } from '../../model/task/move-task';
import { TaskRules } from '../../model/task/task-rules';
import { FileMatch } from '../../model/task/file-match.enum';
import { Folder } from '../../model/task/folder';
import { DeleteTask } from '../../model/task/delete-task';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  taskManger: TaskManager = new TaskManager();

  constructor() {
    this.mockData();
   }

   private mockData() {
    const taskRules: TaskRules = {
      imageFiles: true,
      audioFiles: false,
      videoFiles: false,
      documentFiles: false,
      fileMatch: {
        checked: false,
        regex: FileMatch.Contains,
        text: ''
      }
    };
    const sourceFolder: Folder = {
      name: 'C:\\'
    };
    const destinationFolder: Folder = {
      name: 'D:\\'
    };
    const task: MoveTask = new MoveTask('Organize Desktop', sourceFolder, destinationFolder, taskRules, true);
    const task2: DeleteTask = new DeleteTask('Organize Desktop 2', sourceFolder, taskRules, true);
    this.taskManger.add(task);
    this.taskManger.add(task2);
   }

}
