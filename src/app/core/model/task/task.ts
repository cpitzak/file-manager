import { Folder } from "./folder";
import { TaskRules } from "./task-rules";

export abstract class Task {
	name: string;
	runOnStartup: boolean;
  sourceFolder: Folder;
  destinationFolder: Folder;
  rules: TaskRules;

  constructor(name: string, sourceFolder: Folder, destinationFolder: Folder,
    rules: TaskRules, runOnStartup?: boolean) {
    this.name = name;
    this.sourceFolder = sourceFolder;
    this.destinationFolder = destinationFolder;
    this.rules = rules;
    this.runOnStartup = Boolean(runOnStartup);
  }

  abstract run(): void;
  newInstance(): Task {
    return this.constructor(this.name, this.sourceFolder, this.destinationFolder, this.rules, this.runOnStartup);
  }

}
