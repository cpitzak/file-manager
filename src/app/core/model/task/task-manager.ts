import { Task } from "./task";

export class TaskManager {
  tasks: Task[] = [];

  run(onStartupOnly: boolean = false) {}

  add(task: Task): boolean {
    if (task != null) {
      if (this.findIndex(task) === -1) {
        this.tasks.push(task);
        return true;
      }
    }
    return false;
  }

  remove(task: Task): Task {
    if (task != null) {
      const i: number = this.findIndex(task);
      if (i !== -1) {
        return this.tasks.splice(i, 1)[0];
      }
    }
    return undefined;
  }

  findIndex(task: Task): number {
    if (task != null) {
      for (let i = 0; i < this.tasks.length; i++) {
        const t: Task = this.tasks[i];
        if (t.constructor === task.constructor && t.name === task.name) {
          return i;
        }
      }
    }
    return -1;
  }
}
