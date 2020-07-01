import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesComponent } from './rules.component';
import { NgControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('RulesComponent', () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(async(() => {
    const NG_CONTROL_PROVIDER = {
      provide: NgControl,
      useClass: class extends NgControl {
      control = new FormControl();
      viewToModelUpdate() {}
      }
    };
    TestBed.configureTestingModule({
      declarations: [ RulesComponent ],
      providers: [NgControl],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
    })
    .overrideComponent(RulesComponent, {
      add: { providers: [NG_CONTROL_PROVIDER] },
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
