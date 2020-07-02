import { Task } from "./task";
import { Folder } from "./folder";
import { TaskRules } from "./task-rules";

export class MoveTask extends Task {
  constructor(name: string, sourceFolder: Folder, destinationFolder: Folder, rules: TaskRules, runOnStartup?: boolean) {
    super(name, sourceFolder, destinationFolder, rules, runOnStartup);
  }

  run() {}
}
