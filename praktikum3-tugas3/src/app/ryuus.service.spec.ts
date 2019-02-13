import { TestBed } from '@angular/core/testing';

import { RyuusService } from './ryuus.service';

describe('RyuusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RyuusService = TestBed.get(RyuusService);
    expect(service).toBeTruthy();
  });
});
