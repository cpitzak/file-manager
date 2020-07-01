import { FormControl, ValidationErrors } from '@angular/forms';

export function validateTaskNameInput(formControl: FormControl): ValidationErrors | null {
  const min: number = 1;
  const name: string = formControl.value;
  const error = {
    minLength: {
      min
    }
  };
  return (name.length >= min) ? null : error;
}
