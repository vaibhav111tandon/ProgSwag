import { TestBed } from '@angular/core/testing';

import { SwagsService } from './swags.service';

describe('SwagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwagsService = TestBed.get(SwagsService);
    expect(service).toBeTruthy();
  });
});
