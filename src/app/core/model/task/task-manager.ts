import { Task } from "./task";

export class TaskManager {
  private tasks: Task[] = [];

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

  remove(task: Task): boolean {
    if (task != null) {
      const i: number = this.findIndex(task);
      if (i !== -1) {
        const r: Task[] = this.tasks.splice(i, 1);
        return r.length === 1;
      }
    }
    return false;
  }

  contains(task: Task): boolean {
    return this.containsName(task?.name);
  }

  containsName(name: string): boolean {
    return this.findIndexByName(name) !== -1;
  }

  findIndex(task: Task): number {
    return this.findIndexByName(task?.name);
  }

  findIndexByName(name: string): number {
    if (name != null) {
      for (let i = 0; i < this.tasks.length; i++) {
        const t: Task = this.tasks[i];
        if (t.name === name) {
          return i;
        }
      }
    }
    return -1;
  }

  size(): number {
    return this.tasks.length;
  }

}
