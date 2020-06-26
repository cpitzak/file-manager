import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";

import { OpenFolderComponent } from './open-folder.component';
import { FormsModule, ReactiveFormsModule, FormControl, NgControl } from '@angular/forms';

describe('OpenFolderComponent', () => {
  let component: OpenFolderComponent;
  let fixture: ComponentFixture<OpenFolderComponent>;

  beforeEach(async(() => {
    const NG_CONTROL_PROVIDER = {
      provide: NgControl,
      useClass: class extends NgControl {
      control = new FormControl();
      viewToModelUpdate() {}
      }
    };
    TestBed.configureTestingModule({
      declarations: [ OpenFolderComponent ],
      providers: [NgControl],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
    })
    .overrideComponent(OpenFolderComponent, {
      add: { providers: [NG_CONTROL_PROVIDER] },
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
