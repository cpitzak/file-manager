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
      audioFiles: true,
      videoFiles: true,
      documentFiles: true,
      fileMatch: {
        checked: true,
        regex: FileMatch.Contains,
        text: 'blah'
      }
    };
    const sourceFolder: Folder = {
      name: 'C:\\Users\\black\\Desktop\\images',
      includeSubfolders: true
    };
    const destinationFolder: Folder = {
      name: 'C:\\Users\\black\\Desktop\\moved-images',
      putInSubfolder: true
    };
    const task: MoveTask = new MoveTask('Organize Desktop', sourceFolder, destinationFolder, taskRules, true);
    const task2: DeleteTask = new DeleteTask('Organize Desktop 2', sourceFolder, taskRules, true);
    this.taskManger.add(task);
    this.taskManger.add(task2);
   }

}
