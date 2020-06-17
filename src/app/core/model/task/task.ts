export abstract class Task {
	name: string;
	runOnStartup: boolean;
	srcDirs: Set<string>;
	dstDirs: Set<string>;
	srcFileRegexes: Set<string>;
  abstract run(): void;
}
