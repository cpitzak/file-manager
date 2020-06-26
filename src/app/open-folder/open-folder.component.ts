import { Component, Self } from "@angular/core";
import { FormGroup, FormControl, Validators, NgControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
const { shell } = require("electron"); // deconstructing assignment
const remote = require("electron").remote;
const app = remote.app;

@Component({
  selector: "app-open-folder",
  templateUrl: "./open-folder.component.html",
  styleUrls: ["./open-folder.component.css"],
})
export class OpenFolderComponent implements ControlValueAccessor {
  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
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
    const folderName = srcFolder?.length > 0 ? srcFolder[0] : '';
    this.ngControl.control.setValue(folderName);
  }
}
