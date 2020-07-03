import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesComponent } from './rules.component';
import { NgControl, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

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
        RouterTestingModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        SharedModule,
        TranslateModule.forRoot()
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
