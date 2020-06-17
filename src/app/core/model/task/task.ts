import { SourceFolder } from "./source-folder";
import { DestinationFolder } from "./destination-folder";

export abstract class Task {
	name: string;
	runOnStartup: boolean;
	srcDirs: Set<SourceFolder>;
	dstDirs: Set<DestinationFolder>;
  srcFileRegexes: Set<string>;

  constructor(name: string) {
    this.name = name;
  }

  abstract run(): void;

}
