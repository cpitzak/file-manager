import { Folder } from "./folder";
import { DestinationFolder } from "./destination-folder";

export abstract class Task {
	name: string;
	runOnStartup: boolean;
	srcDirs: Set<Folder>;
	dstDirs: Set<DestinationFolder>;
  srcFileRegexes: Set<string>;

  constructor(name: string) {
    this.name = name;
  }

  abstract run(): void;

}
