import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDialogComponent } from './generic-dialog.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GenericDialogData } from './model/generic-dialog-data';

describe('GenericDialogComponent', () => {
  let component: GenericDialogComponent;
  let fixture: ComponentFixture<GenericDialogComponent>;

  beforeEach(async(() => {
    const data: GenericDialogData = {
      title: '',
      acceptButton: {
        enabled: false
      },
      rejectButton: {
        enabled: false
      },
      innerHtml: ''
    };
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: MatDialogRef, useValue: {} }
      ],
      declarations: [ GenericDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
