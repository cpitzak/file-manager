import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatCheckboxChange, MatCheckbox } from '@angular/material/checkbox';
import { MatSelect } from '@angular/material/select';

export enum FileMatch {
  Matches = 'matches',
  MatchesCaseInsensitive = 'in matches',
  NotMatch = 'not match',
  NotMatchCaseInsensitive = 'in not match',
  Contains = 'contains',
  NotContains = 'notContains',

}

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit, AfterViewInit {
  @ViewChild('filenameCheckbox') filenameCheckbox: MatCheckbox;
  @ViewChild('fileMatSelect') fileMatSelect: MatSelect;
  FileMatch = FileMatch;
  fileMatchSelection: FileMatch = FileMatch.Matches;

  constructor(private cdf: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.fileMatSelect.disabled = !this.filenameCheckbox.checked;
    this.cdf.detectChanges();
  }

  ngOnInit(): void {
  }

  onFilenameCheckboxChange(event: MatCheckboxChange) {
    this.fileMatSelect.disabled = !event.checked;
  }

}
