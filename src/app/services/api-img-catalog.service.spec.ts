import { TestBed } from '@angular/core/testing';

import { ApiImgCatalogService } from './api-img-catalog.service';

describe('ApiImgCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiImgCatalogService = TestBed.get(ApiImgCatalogService);
    expect(service).toBeTruthy();
  });
});
