import { TestBed } from '@angular/core/testing';

import { ShoeServiceService } from './shoe-service.service';

describe('StudentService', () => {
  let service: ShoeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
