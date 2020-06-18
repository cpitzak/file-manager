import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFolderComponent } from './open-folder.component';

describe('OpenFolderComponent', () => {
  let component: OpenFolderComponent;
  let fixture: ComponentFixture<OpenFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenFolderComponent ]
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
