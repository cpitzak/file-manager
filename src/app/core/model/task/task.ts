import { Folder } from "./folder";
import { TaskRules } from "./task-rules";

export abstract class Task {
	name: string;
	runOnStartup: boolean;
  sourceFolder: Folder;
  destinationFolder: Folder;
  rules: TaskRules;

  constructor(name: string) {
    this.name = name;
  }

  abstract run(): void;

}
