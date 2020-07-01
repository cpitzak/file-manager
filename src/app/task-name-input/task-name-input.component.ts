import { Component, OnInit, Self, ChangeDetectorRef } from '@angular/core';
import { BaseControlValueAccessor } from '../core/model/base-control-value-accessor';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-task-name-input',
  templateUrl: './task-name-input.component.html',
  styleUrls: ['./task-name-input.component.css']
})
export class TaskNameInputComponent implements OnInit, BaseControlValueAccessor<string> {

  constructor(@Self() public ngControl: NgControl, private cdf: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
   }

  ngOnInit(): void {
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
