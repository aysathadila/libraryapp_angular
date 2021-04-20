import { TestBed } from '@angular/core/testing';

import { KdramaService } from './kdrama.service';

describe('KdramaService', () => {
  let service: KdramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KdramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
