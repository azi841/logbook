import { TestBed } from '@angular/core/testing';

import { RegisterPatientService } from './register-patient.service';

describe('RegisterPatientService', () => {
  let service: RegisterPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
