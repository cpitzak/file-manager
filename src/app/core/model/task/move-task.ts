import { Task } from "./task";
import { Folder } from "./folder";
import { TaskRules } from "./task-rules";
import * as fileExtensions from '../file-extensions';
import * as fromUtils from '../utilities/utils';
import { move } from '../utilities/move-file';
import { FileContainer } from './file-container';
const path = require('path');

export class MoveTask extends Task {

  constructor(name: string, sourceFolder: Folder, destinationFolder: Folder, rules: TaskRules, runOnStartup?: boolean) {
    super(name, sourceFolder, destinationFolder, rules, runOnStartup);
  }

  newInstance(): Task {
    return new MoveTask(this.name, this.sourceFolder, this.destinationFolder, this.rules, this.runOnStartup);
  }

  run() {
    const fileContainer: FileContainer = this.getFileContainer();
    if (this.rules.imageFiles) {
      let dest: string = this.destinationFolder.name;
      if (this.destinationFolder.putInSubfolder) {
        const destSubfolder: string = fromUtils.getFolderFormat(this.destinationFolder.subfolderFormat);
        dest = path.join(this.destinationFolder.name, destSubfolder);
      }
      fileContainer.imageFiles.forEach((filePath: string) => {
        if (this.rules.fileMatch.checked) {
          if (this.isMatch(filePath)) {
            move(filePath, dest);
          }
        } else {
          move(filePath, dest);
        }
      });
    }
  }

  private isMatch(filePath: string): boolean {
    const filenameWithExt: string = path.basename(filePath);
    const extIndex: number = filenameWithExt.indexOf('.');
    const filename: string = filenameWithExt.substring(0, extIndex);
    return fromUtils.matches(filename, this.rules.fileMatch.text, this.rules.fileMatch.regex);
  }

  private getFileContainer(): FileContainer {
    const files: string[] = fromUtils.getFiles(this.sourceFolder.name, this.sourceFolder.includeSubfolders);
    const container: FileContainer = {
      imageFiles: [],
      documentFiles: [],
      audioFiles: [],
      videoFiles: []
    };
    files.forEach((file: string) => {
      const ext: string = path.extname(file).replace('.', '').toLowerCase();
      if (fileExtensions.image.includes(ext)) {
        container.imageFiles.push(file);
      }
    });
    return container;
  }

}
