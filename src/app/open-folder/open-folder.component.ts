import { Component, Self, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators, NgControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseControlValueAccessor } from '../core/model/base-control-value-accessor';
import { SourceFolder } from '../core/model/task/source-folder';
import { MatCheckbox } from "@angular/material/checkbox";
import { MatInputModule, MatInput } from "@angular/material/input";
const { shell } = require("electron"); // deconstructing assignment
const remote = require("electron").remote;
const app = remote.app;


@Component({
  selector: "app-open-folder",
  templateUrl: "./open-folder.component.html",
  styleUrls: ["./open-folder.component.css"],
})
export class OpenFolderComponent implements BaseControlValueAccessor<SourceFolder> {
  @ViewChild('checkbox') checkbox: MatCheckbox;
  @ViewChild('input') input: ElementRef;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  public disabled: boolean;
  public onChange(newVal: SourceFolder): void {
    throw new Error("Method not implemented.");
  }
  public onTouched(_?: any): void {
    throw new Error("Method not implemented.");
  }
  public value: SourceFolder;
  public writeValue(obj: SourceFolder): void {
    throw new Error("Method not implemented.");
  }
  public registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  public registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  public setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  onOpen() {
    const desktop: string = app.getPath("desktop");
    // console.log(shell.openItem(desktop));
    // console.log(app.getPath('userData'));
    const srcFolder: string[] | undefined = remote.dialog.showOpenDialogSync({
      defaultPath: desktop,
      properties: ["openDirectory"],
    });
    const name: string = srcFolder?.length > 0 ? srcFolder[0] : '';
    const sourceFolder: SourceFolder = {
      name,
      includeSubfolders: this.checkbox.checked
    }
    this.ngControl.control.setValue(sourceFolder);
    this.input.nativeElement.value = name;
  }

  onCheckboxChange(event: MatCheckbox) {
    console.log(event);
    let sourceFolder: SourceFolder = this.ngControl.control.value;
    sourceFolder.includeSubfolders = event.checked;
  }

}
