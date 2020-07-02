import { TestBed } from '@angular/core/testing';

import { MoveTabService } from './move-tab.service';

describe('MoveTabService', () => {
  let service: MoveTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
