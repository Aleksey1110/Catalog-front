import { TestBed } from '@angular/core/testing';

import { FlashErrorService } from './flash-error.service';

describe('FlashErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlashErrorService = TestBed.get(FlashErrorService);
    expect(service).toBeTruthy();
  });
});
