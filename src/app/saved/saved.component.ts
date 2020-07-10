import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../core/services/task-manager/task-manager.service';
import { Task } from '../core/model/task/task';
import { MoveTask } from '../core/model/task/move-task';
import { DeleteTask } from '../core/model/task/delete-task';
import { TranslateService } from '@ngx-translate/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

export enum TableColumnLabels {
  Name = 'Task Name',
  TaskType = 'Task Type',
  RunOnStartup = 'Run on Startup',
  Actions = 'Actions'
}

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  TableColumnLabels = TableColumnLabels;
  displayedColumns: string[] = [TableColumnLabels.Name, TableColumnLabels.TaskType,
    TableColumnLabels.RunOnStartup, TableColumnLabels.Actions];
  dataSource: Task[];
  moveLabel: string;
  deleteLabel: string;

  constructor(public taskManagerService: TaskManagerService, private tanslateService: TranslateService) { }

  ngOnInit(): void {
    this.moveLabel = this.tanslateService.instant("SAVED.MOVE");
    this.deleteLabel = this.tanslateService.instant("SAVED.DELETE");
    this.dataSource = this.taskManagerService.taskManger.getTasks();
  }

  onRunOnStartupChange(event: MatCheckboxChange, task: Task) {
    task.runOnStartup = event.checked;
    this.taskManagerService.taskManger.update(task);
  }

  onRun(task: Task) {
    task.run();
  }

  onRemove(task: Task) {
    this.taskManagerService.taskManger.remove(task);
    this.dataSource = this.taskManagerService.taskManger.getTasks();
  }

  getType(task: Task): string {
    let result = '';
    if (task instanceof MoveTask) {
      result = this.moveLabel;
    } else if (task instanceof DeleteTask) {
      result = this.deleteLabel;
    }
    return result;
  }

  getRouterLink(task: Task): string[] {
    let url: string[] = [];
    if (task instanceof MoveTask) {
      url = ['/move', task.id];
    } else if (task instanceof DeleteTask) {
      url = ['/delete'];
    }
    return url;
  }

}
