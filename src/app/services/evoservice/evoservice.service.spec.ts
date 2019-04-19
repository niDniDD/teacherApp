import { TestBed } from '@angular/core/testing';

import { EvoserviceService } from './evoservice.service';

describe('EvoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvoserviceService = TestBed.get(EvoserviceService);
    expect(service).toBeTruthy();
  });
});
