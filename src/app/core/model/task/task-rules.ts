import { FileMatch } from './file-match.enum';

export interface TaskRules {
  imageFiles: boolean;
  documentFiles: boolean;
  audioFiles: boolean;
  videoFiles: boolean;
  fileMatch: {
    checked: boolean;
    regex: FileMatch;
    text: string;
  };
}
