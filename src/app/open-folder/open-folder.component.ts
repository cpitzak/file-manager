import { Component, Self, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, AfterContentChecked } from "@angular/core";
import { NgControl, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormControl } from "@angular/forms";
import { BaseControlValueAccessor } from "../core/model/base-control-value-accessor";
import { SourceFolder } from "../core/model/task/source-folder";
import { MatCheckbox } from "@angular/material/checkbox";
const { shell } = require("electron"); // deconstructing assignment
const remote = require("electron").remote;
const app = remote.app;

@Component({
  selector: "app-open-folder",
  templateUrl: "./open-folder.component.html",
  styleUrls: ["./open-folder.component.css"],
})
export class OpenFolderComponent implements BaseControlValueAccessor<SourceFolder>, AfterViewInit  {
  @ViewChild("checkbox") checkbox: MatCheckbox;
  @ViewChild("input") input: ElementRef;

  constructor(@Self() public ngControl: NgControl, private cdf: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
  }

  ngAfterViewInit(): void {
    const sourceFolder: SourceFolder = this.ngControl.control.value;
    this.input.nativeElement.value = sourceFolder?.name;
    // to avoid error: ExpressionChangedAfterItHasBeenCheckedError
    this.cdf.detectChanges();
  }

  public disabled: boolean;
  public onChange(newVal: SourceFolder): void {
    if (this.input) {
      this.input.nativeElement.value = newVal.name;
    }
  }
  public onTouched(_?: any): void {
    throw new Error("Method not implemented.");
  }
  public value: SourceFolder;
  public writeValue(obj: SourceFolder): void {
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

  onOpen() {
    const desktop: string = app.getPath("desktop");
    const srcFolder: string[] | undefined = remote.dialog.showOpenDialogSync({
      defaultPath: desktop,
      properties: ["openDirectory"],
    });
    const name: string = srcFolder?.length > 0 ? srcFolder[0] : "";
    const sourceFolder: SourceFolder = {
      name,
      includeSubfolders: this.checkbox.checked,
    };
    this.ngControl.control.setValue(sourceFolder);
    this.input.nativeElement.value = name;
  }

  onCheckboxChange(event: MatCheckbox) {
    let sourceFolder: SourceFolder = this.ngControl.control.value;
    sourceFolder.includeSubfolders = event.checked;
  }
}
