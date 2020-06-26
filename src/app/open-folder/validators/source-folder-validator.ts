import { FormControl, ValidationErrors } from '@angular/forms';
import { Folder } from '../../core/model/task/folder';

export function validateSourceFolder(formControl: FormControl): ValidationErrors | null {
  const min: number = 1;
  const sourceFolder: Folder = formControl.value;
  const error = {
    folderError: {
      given: sourceFolder?.name,
      min
    }
  };
  return (sourceFolder.name?.length >= min) ? null : error;
}
