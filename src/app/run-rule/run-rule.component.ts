import { Component, OnInit, Output, EventEmitter, Self, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatCheckboxChange, MatCheckbox } from '@angular/material/checkbox';
import { BaseControlValueAccessor } from "../core/model/base-control-value-accessor";
import { NgControl } from '@angular/forms';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-run-rule',
  templateUrl: './run-rule.component.html',
  styleUrls: ['./run-rule.component.css']
})
export class RunRuleComponent implements OnInit, AfterViewInit, BaseControlValueAccessor<boolean> {
  @ViewChild('runCheckbox') runCheckbox: MatCheckbox;
  @Input() runDisabled: boolean;
  @Output() run = new EventEmitter<void>();

  constructor(@Self() public ngControl: NgControl, private cdr: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.runCheckbox.checked = this.ngControl.control.value;
    this.cdr.detectChanges();
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
