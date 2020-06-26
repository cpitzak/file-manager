import { FormControl, ValidationErrors } from '@angular/forms';
import { SourceFolder } from '../../core/model/task/source-folder';

export function validateSourceFolder(formControl: FormControl): ValidationErrors | null {
  const min: number = 1;
  const sourceFolder: SourceFolder = formControl.value;
  const error = {
    folderError: {
      given: sourceFolder?.name,
      min
    }
  };
  return (sourceFolder.name?.length >= min) ? null : error;
}
