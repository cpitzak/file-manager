import { FormControl, ValidationErrors } from "@angular/forms";
import { TaskRules } from "../../core/model/task/task-rules";

export function validateRules(formControl: FormControl): ValidationErrors | null {
  const taskRules: TaskRules = formControl.value;
  const checked: boolean =
    taskRules.audioFiles ||
    taskRules.documentFiles ||
    taskRules.fileMatch.checked ||
    taskRules.imageFiles ||
    taskRules.videoFiles;
  let errors: any = {};
  if (!checked) {
    errors.unchecked = true;
  }
  if (taskRules.fileMatch.checked && taskRules.fileMatch.text.length === 0) {
    errors.noText = true;
  }
  return Object.keys(errors).length > 0 ? errors : null;
}
