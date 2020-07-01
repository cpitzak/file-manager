import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNameInputComponent } from './task-name-input.component';

describe('TaskNameInputComponent', () => {
  let component: TaskNameInputComponent;
  let fixture: ComponentFixture<TaskNameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskNameInputComponent ]
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
