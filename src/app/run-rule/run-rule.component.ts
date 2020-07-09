import { Component, OnInit, Output, EventEmitter, Self } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { BaseControlValueAccessor } from "../core/model/base-control-value-accessor";
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-run-rule',
  templateUrl: './run-rule.component.html',
  styleUrls: ['./run-rule.component.css']
})
export class RunRuleComponent implements OnInit, BaseControlValueAccessor<boolean> {
  @Output() run = new EventEmitter<void>();

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
  }

  public disabled: boolean;
  public onChange(newVal: boolean): void {
    // throw new Error("Method not implemented.");
  }
  public onTouched(_?: any): void {
    throw new Error("Method not implemented.");
  }
  public value: boolean;
  public writeValue(obj: boolean): void {
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

  onCheck(event: MatCheckboxChange) {
    this.ngControl.control.setValue(event.checked);
  }

  onRun() {
    this.run.emit();
  }

}
