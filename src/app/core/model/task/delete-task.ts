import { Task } from "./task";
import { Folder } from "./folder";
import { TaskRules } from "./task-rules";

export class DeleteTask extends Task {
  constructor(name: string, sourceFolder: Folder, rules: TaskRules, runOnStartup?: boolean) {
    super(name, sourceFolder, null, rules, runOnStartup);
  }

  newInstance(): Task {
    return new DeleteTask(this.name, this.sourceFolder, this.rules, this.runOnStartup);
  }

	run() {
    console.log('running delete task');
  }
}
