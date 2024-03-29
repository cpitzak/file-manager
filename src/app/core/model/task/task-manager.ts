import { Task } from "./task";

export class TaskManager {
  private tasks: Task[] = [];

  run(onStartupOnly: boolean = false) {}

  getTaskNames(): string[] {
    const names: string[] = [];
    this.tasks.forEach((task: Task) => {
      names.push(task.name);
    });
    return names;
  }

  getTasks(): Task[] {
    const t: Task[] = [];
    this.tasks.forEach((task: Task) => {
      t.push(task);
    });
    return t;
  }

  getTaskById(id: string): Task {
    if (id == null) {
      return undefined;
    }
    for (let i = 0; i < this.tasks.length; i++) {
      const t: Task = this.tasks[i];
      if (t.id === id) {
        return this.tasks[i];
      }
    }
    return undefined;
  }

  update(task: Task) {
    if (task != null) {
      const i: number = this.findIndex(task);
      this.tasks[i] = task;
    }
  }

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
