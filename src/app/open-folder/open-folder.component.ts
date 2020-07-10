import { Component, Self, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import { NgControl } from "@angular/forms";
import { BaseControlValueAccessor } from "../core/model/base-control-value-accessor";
import { Folder } from "../core/model/task/folder";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatSelectChange } from "@angular/material/select";
import { Subscription } from "rxjs";
const { shell } = require("electron"); // deconstructing assignment
const remote = require("electron").remote;
const app = remote.app;

export interface OpenFolderOpts {
  openFolderPlaceholder: string;
  showIncludeSubfolder?: boolean;
  showPutInSubfolder?: boolean;
}

export enum FolderFormatOption {
  MonthYear = 'month-year',
  YearMonth = 'year-month',
  DayMonthYear = 'day-month-year'
}

@Component({
  selector: "app-open-folder",
  templateUrl: "./open-folder.component.html",
  styleUrls: ["./open-folder.component.css"],
})
export class OpenFolderComponent implements BaseControlValueAccessor<Folder>, AfterViewInit, OnDestroy  {
  @ViewChild("checkbox") checkbox: MatCheckbox;
  @ViewChild("checkbox2") checkbox2: MatCheckbox;
  @ViewChild("input") input: ElementRef;

  @Output("opened") opened = new EventEmitter<string>();
  @Input('opts') opts: OpenFolderOpts = {
    openFolderPlaceholder: '',
    showIncludeSubfolder: false,
    showPutInSubfolder: false
  };

  valueChanges: Subscription;
  FolderFormatOption = FolderFormatOption;
  selected = FolderFormatOption.MonthYear;

  constructor(@Self() public ngControl: NgControl, private cdf: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
  }

  ngAfterViewInit(): void {
    this.valueChanges = this.ngControl.valueChanges.subscribe(v => {
      const folder: Folder = this.ngControl.control.value;
      this.input.nativeElement.value = folder?.name;
    });
    const folder: Folder = this.ngControl.control.value;
    this.input.nativeElement.value = folder?.name;
    // to avoid error: ExpressionChangedAfterItHasBeenCheckedError
    this.cdf.detectChanges();
  }

  ngOnDestroy() {
    this.valueChanges.unsubscribe();
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
    const currentFolder: Folder = this.ngControl.control.value;
    const desktop: string = app.getPath("desktop");
    const folderStr: string[] | undefined = remote.dialog.showOpenDialogSync({
      defaultPath: desktop,
      properties: ["openDirectory"],
    });
    const name: string = folderStr?.length > 0 ? folderStr[0] : currentFolder.name;
    let folder: Folder = {
      name,
    };
    if (this.opts.showIncludeSubfolder) {
      folder.includeSubfolders = this.checkbox.checked;
    }
    if (this.opts.showPutInSubfolder && this.checkbox2.checked) {
      folder.putInSubfolder = true;
      folder.subfolderFormat = this.selected;
    }
    this.ngControl.control.setValue(folder);
    this.opened.emit(name);
  }

  onIncludeSubfolders(event: MatCheckbox) {
    let folder: Folder = this.ngControl.control.value;
    folder.includeSubfolders = event.checked;
  }

  onPutInSubfolder(event: MatCheckbox) {
    let folder: Folder = this.ngControl.control.value;
    folder.putInSubfolder = event.checked;
    const date: Date = new Date();
    if (event.checked) {
      switch (this.selected) {
        case FolderFormatOption.MonthYear: {
          folder.subfolderFormat = `${date.getMonth() + 1}-${date.getFullYear()}`;
          break;
        }
        case FolderFormatOption.YearMonth: {
          folder.subfolderFormat = `${date.getFullYear()}-${date.getMonth() + 1}`;
          break;
        }
        case FolderFormatOption.DayMonthYear: {
          folder.subfolderFormat = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
          break;
        }
      }
    } else {
      folder.subfolderFormat = undefined;
    }
  }

  onSelectionChange(event: MatSelectChange) {
    let folder: Folder = this.ngControl.control.value;
    folder.subfolderFormat = event.value;
  }

}
