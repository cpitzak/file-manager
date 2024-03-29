import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef, Self } from '@angular/core';
import { MatCheckboxChange, MatCheckbox } from '@angular/material/checkbox';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import {FileMatch } from '../core/model/task/file-match.enum';
import { BaseControlValueAccessor } from '../core/model/base-control-value-accessor';
import { TaskRules } from '../core/model/task/task-rules';
import { NgControl } from '@angular/forms';
import * as fromUtils from '../core/model/utilities/utils';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: "app-rules",
  templateUrl: "./rules.component.html",
  styleUrls: ["./rules.component.css"],
})
export class RulesComponent implements OnInit, AfterViewInit, BaseControlValueAccessor<TaskRules> {
  @ViewChild('imgCheckbox') imgCheckbox: MatCheckbox;
  @ViewChild('documentCheckbox') documentCheckbox: MatCheckbox;
  @ViewChild('audioCheckbox') audioCheckbox: MatCheckbox;
  @ViewChild('videoCheckbox') videoCheckbox: MatCheckbox;
  @ViewChild("filenameCheckbox") filenameCheckbox: MatCheckbox;
  @ViewChild("fileMatSelect") fileMatSelect: MatSelect;
  @ViewChild("textInput") textInput: ElementRef;
  fromUtils = fromUtils;
  FileMatch = FileMatch;
  imageFiles: string = fromUtils.propertyOf<TaskRules>("imageFiles");
  documentFiles: string = fromUtils.propertyOf<TaskRules>("documentFiles");
  audioFiles: string = fromUtils.propertyOf<TaskRules>("audioFiles");
  videoFiles: string = fromUtils.propertyOf<TaskRules>("videoFiles");
  fileMatch: string = fromUtils.propertyOf<TaskRules>("fileMatch");
  initialSelection: FileMatch;
  v2: string;

  constructor(@Self() public ngControl: NgControl, private cdf: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const taskRules: TaskRules = this.ngControl.control.value;
    // load file name state
    this.filenameCheckbox.checked = taskRules.fileMatch.checked;
    this.initialSelection = taskRules.fileMatch.regex;
    this.textInput.nativeElement.value = taskRules.fileMatch.text || '';
    this.fileMatSelect.disabled = !this.filenameCheckbox.checked;
    this.textInput.nativeElement.disabled = !this.filenameCheckbox.checked;
    // load checkbox state
    this.imgCheckbox.checked = taskRules.imageFiles;
    this.documentCheckbox.checked = taskRules.documentFiles;
    this.audioCheckbox.checked = taskRules.audioFiles;
    this.videoCheckbox.checked = taskRules.videoFiles;
    this.cdf.detectChanges();
  }

  public disabled: boolean;
  public onChange(newVal: TaskRules): void {
    // throw new Error("Method not implemented.");
  }
  public onTouched(_?: any): void {
    throw new Error("Method not implemented.");
  }
  public value: TaskRules;
  public writeValue(obj: TaskRules): void {
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

  onSelectChange(event: MatSelectChange) {
    const taskRules: TaskRules = this.ngControl.control.value;
    taskRules.fileMatch.regex = event.value;
    this.ngControl.control.setValue(taskRules);
  }

  onTextChange(value: string) {
    const taskRules: TaskRules = this.ngControl.control.value;
    taskRules.fileMatch.text = value;
    this.ngControl.control.setValue(taskRules);
  }

  onCheck(event: MatCheckboxChange, key: string) {
    if (key === this.fileMatch) {
      this.filenameCheckboxChange(event);
    } else {
      const taskRules: TaskRules = this.ngControl.control.value;
      taskRules[key] = event.checked;
      this.ngControl.control.setValue(taskRules);
    }
  }

  private filenameCheckboxChange(event: MatCheckboxChange) {
    const taskRules: TaskRules = this.ngControl.control.value;
    taskRules.fileMatch.checked = event.checked;
    this.fileMatSelect.disabled = !event.checked;
    this.textInput.nativeElement.disabled = !event.checked;
    if (event.checked) {
      taskRules.fileMatch.text = this.textInput.nativeElement.value;
      taskRules.fileMatch.regex = this.fileMatSelect.value;
    }
    this.ngControl.control.setValue(taskRules);
  }

}
