import { Component, Self, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, AfterContentChecked, Input } from "@angular/core";
import { NgControl, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormControl } from "@angular/forms";
import { BaseControlValueAccessor } from "../core/model/base-control-value-accessor";
import { Folder } from "../core/model/task/folder";
import { MatCheckbox } from "@angular/material/checkbox";
const { shell } = require("electron"); // deconstructing assignment
const remote = require("electron").remote;
const app = remote.app;

export interface OpenFolderOpts {
  showIncludeSubfolder?: boolean;
  showPutInSubfolder?: boolean;
}

@Component({
  selector: "app-open-folder",
  templateUrl: "./open-folder.component.html",
  styleUrls: ["./open-folder.component.css"],
})
export class OpenFolderComponent implements BaseControlValueAccessor<Folder>, AfterViewInit  {
  @ViewChild("checkbox") checkbox: MatCheckbox;
  @ViewChild("input") input: ElementRef;
  @Input('opts') opts: OpenFolderOpts = {
    showIncludeSubfolder: false,
    showPutInSubfolder: false
  };

  constructor(@Self() public ngControl: NgControl, private cdf: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
  }

  ngAfterViewInit(): void {
    const folder: Folder = this.ngControl.control.value;
    this.input.nativeElement.value = folder?.name;
    // to avoid error: ExpressionChangedAfterItHasBeenCheckedError
    this.cdf.detectChanges();
  }

  public disabled: boolean;
  public onChange(newVal: Folder): void {
    if (this.input) {
      this.input.nativeElement.value = newVal.name;
    }
  }
  public onTouched(_?: any): void {
    throw new Error("Method not implemented.");
  }
  public value: Folder;
  public writeValue(obj: Folder): void {
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
    const folderStr: string[] | undefined = remote.dialog.showOpenDialogSync({
      defaultPath: desktop,
      properties: ["openDirectory"],
    });
    const name: string = folderStr?.length > 0 ? folderStr[0] : "";
    let folder: Folder = {
      name,
    };
    if (this.opts.showIncludeSubfolder) {
      folder.includeSubfolders = this.checkbox.checked;
    }
    this.ngControl.control.setValue(folder);
    this.input.nativeElement.value = name;
  }

  onCheckboxChange(event: MatCheckbox) {
    let folder: Folder = this.ngControl.control.value;
    folder.includeSubfolders = event.checked;
  }
}
