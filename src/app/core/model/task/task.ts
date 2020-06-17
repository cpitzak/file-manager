import { SourceFolder } from "./source-folder";
import { DestinationFolder } from "./destination-folder";

export abstract class Task {
	name: string;
	runOnStartup: boolean;
	srcDirs: Set<SourceFolder>;
	dstDirs: Set<DestinationFolder>;
	srcFileRegexes: Set<string>;

  abstract run(): void;

  equals(other: Task): boolean {
    if (other === this) {
      return true;
    }
    if (other.constructor !== this.constructor) {
      return false;
    }
    if (other.name !== this.name) {
      return false;
    }
    return true;
  }

  hashCode(): number {
    let h = 0;
    for(let i = 0; i < this.name.length; i++)
          h = Math.imul(31, h) + this.name.charCodeAt(i) | 0;

    return h;
  }
}
