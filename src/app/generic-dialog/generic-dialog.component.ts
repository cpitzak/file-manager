import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericDialogData } from './model/generic-dialog-data';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.css']
})
export class GenericDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: GenericDialogData) { }

  ngOnInit(): void {
  }

}
