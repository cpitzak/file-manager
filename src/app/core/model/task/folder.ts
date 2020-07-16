import { FolderFormat } from './folder-format.enum';

export interface Folder {
  name: string;
  includeSubfolders?: boolean;
  putInSubfolder?: boolean;
  subfolderFormat?: FolderFormat;
}
