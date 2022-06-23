import { TestBed } from '@angular/core/testing';

import { AdminServiceService } from './adminservice.service';

describe('AdminServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminServiceService = TestBed.get(AdminServiceService);
    expect(service).toBeTruthy();
  });
});
