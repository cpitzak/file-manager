import { Folder } from "./folder";
import { TaskRules } from "./task-rules";
import { v4 as uuidv4 } from 'uuid';

export abstract class Task {
  #uuid: string;
	#name: string;
	runOnStartup: boolean;
  sourceFolder: Folder;
  destinationFolder: Folder;
  rules: TaskRules;

  constructor(name: string, sourceFolder: Folder, destinationFolder: Folder,
    rules: TaskRules, runOnStartup?: boolean) {
    this.#uuid = uuidv4();
    this.#name = name;
    this.sourceFolder = sourceFolder;
    this.destinationFolder = destinationFolder;
    this.rules = rules;
    this.runOnStartup = Boolean(runOnStartup);
  }

  get name(): string {
    return this.#name;
  }
  get id(): string {
    return this.#uuid;
  }
  abstract run(): void;
  abstract newInstance(): Task;

}
