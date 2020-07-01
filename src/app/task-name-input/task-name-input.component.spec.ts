import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNameInputComponent } from './task-name-input.component';
import { NgControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('TaskNameInputComponent', () => {
  let component: TaskNameInputComponent;
  let fixture: ComponentFixture<TaskNameInputComponent>;

  beforeEach(async(() => {
    const NG_CONTROL_PROVIDER = {
      provide: NgControl,
      useClass: class extends NgControl {
      control = new FormControl();
      viewToModelUpdate() {}
      }
    };
    TestBed.configureTestingModule({
      declarations: [ TaskNameInputComponent ],
      providers: [NgControl],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
    })
    .overrideComponent(TaskNameInputComponent, {
      add: { providers: [NG_CONTROL_PROVIDER] },
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
