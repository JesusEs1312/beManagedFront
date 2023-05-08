import { TestBed } from '@angular/core/testing';

import { ManagedService } from './managed.service';

describe('ManagedService', () => {
  let service: ManagedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
