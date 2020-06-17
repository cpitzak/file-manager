import { Task } from "./task";

export class TaskManager {
  private tasks: Set<Task> = new Set<Task>();

  run(onStartupOnly: boolean = false) {}

  add(task: Task) {
    if (task == null) {
      return;
    }
    this.tasks.add(task);
  }

  remove(task: Task): boolean {
    if (task == null) {
      return false;
    }
    return this.tasks.delete(task);
  }

  size(): number {
    return this.tasks.size;
  }

}
