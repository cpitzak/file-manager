import { Folder } from "./folder";

export class SourceFolder extends Folder {
  includeSubfolders: boolean;
  constructor(name: string) {
    super(name);
  }
}
