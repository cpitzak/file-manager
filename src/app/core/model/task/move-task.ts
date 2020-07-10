import { Task } from "./task";
import { Folder } from "./folder";
import { TaskRules } from "./task-rules";
import * as fileExtensions from '../file-extensions';

export class MoveTask extends Task {
  constructor(name: string, sourceFolder: Folder, destinationFolder: Folder, rules: TaskRules, runOnStartup?: boolean) {
    super(name, sourceFolder, destinationFolder, rules, runOnStartup);
  }

  newInstance(): Task {
    return new MoveTask(this.name, this.sourceFolder, this.destinationFolder, this.rules, this.runOnStartup);
  }

  run() {
    console.log('running move task');
    console.log(fileExtensions.image);
  }
}
