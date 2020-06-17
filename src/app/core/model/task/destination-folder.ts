import { Folder } from "./folder";

export class DestinationFolder extends Folder {
  subfolderName: string;
  constructor(name: string) {
    super(name);
  }
}
