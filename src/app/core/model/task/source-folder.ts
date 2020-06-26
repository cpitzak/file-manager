import { Folder } from "./folder";

export interface SourceFolder extends Folder {
  includeSubfolders: boolean;
}
