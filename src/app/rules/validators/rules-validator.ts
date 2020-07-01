import { FormControl, ValidationErrors } from '@angular/forms';
import { TaskRules } from '../../core/model/task/task-rules';

export function validateRules(formControl: FormControl): ValidationErrors | null {
  const taskRules: TaskRules = formControl.value;
  const checked: boolean = taskRules.audioFiles || taskRules.documentFiles || taskRules.fileMatch.checked || taskRules.imageFiles || taskRules.videoFiles;
  const error: ValidationErrors = {
    taskRuleError: {
      given: checked,
      expected: true
    }
  };
  return checked ? null : error;
}
