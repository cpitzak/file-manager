import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunRuleComponent } from './run-rule.component';

describe('RunRuleComponent', () => {
  let component: RunRuleComponent;
  let fixture: ComponentFixture<RunRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
