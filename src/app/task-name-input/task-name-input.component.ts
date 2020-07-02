import { Component, OnInit, Self, OnDestroy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { BaseControlValueAccessor } from '../core/model/base-control-value-accessor';
import { TaskManagerService } from '../core/services/task-manager/task-manager.service';
import { MoveTabService } from '../core/services/move-tab/move-tab.service';

@Component({
  selector: 'app-task-name-input',
  templateUrl: './task-name-input.component.html',
  styleUrls: ['./task-name-input.component.css']
})
export class TaskNameInputComponent implements OnInit, OnDestroy, BaseControlValueAccessor<string> {

  valuesChanges: Subscription;

  constructor(@Self() public ngControl: NgControl, private taskManagerService: TaskManagerService, private moveTabService: MoveTabService) {
    this.ngControl.valueAccessor = this;
   }

  ngOnInit(): void {
    this.valuesChanges = this.ngControl.control.valueChanges.subscribe((text: string) => {
      this.validateInput(text);
    })
  }

  ngOnDestroy(): void {
    this.valuesChanges.unsubscribe();
  }

  validateInput(text: string) {
    let matchCount = 0;
    // check if name already exists in a tab
    for (const tab of this.moveTabService.tabs) {
      if (tab.taskName === text) {
        matchCount++;
      }
      if (matchCount >= 2) {
        break;
      }
    }
    // check if name already exists in taskManager service
    if (matchCount >= 2 || this.taskManagerService.taskManger.containsName(text)) {
      const errors = this.ngControl.control.errors || {};
      errors.duplicateName = true;
      this.ngControl.control.setErrors(errors);
    }
  }

  public disabled: boolean;
  public onChange(newVal: string): void {
    // throw new Error("Method not implemented.");
  }
  public onTouched(_?: any): void {
    throw new Error("Method not implemented.");
  }
  public value: string;
  public writeValue(obj: string): void {
    this.onChange(obj);
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
