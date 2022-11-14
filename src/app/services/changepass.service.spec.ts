import { TestBed } from '@angular/core/testing';

import { ChangepassService } from './changepass.service';

describe('ChangepassService', () => {
  let service: ChangepassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangepassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
