import { Task } from "./task";
import { Folder } from "./folder";
import { TaskRules } from "./task-rules";

export class DeleteTask extends Task {
  constructor(name: string, sourceFolder: Folder, rules: TaskRules, runOnStartup?: boolean) {
    super(name, sourceFolder, null, rules, runOnStartup);
  }
	run() {
  }
}
