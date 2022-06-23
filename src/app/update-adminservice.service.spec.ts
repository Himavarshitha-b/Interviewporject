import { TestBed } from '@angular/core/testing';

import { UpdateAdminserviceService } from './update-adminservice.service';

describe('UpdateAdminserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateAdminserviceService = TestBed.get(UpdateAdminserviceService);
    expect(service).toBeTruthy();
  });
});
