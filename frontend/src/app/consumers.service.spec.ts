import { TestBed } from '@angular/core/testing';

import { ConsumersService } from './consumers.service';

describe('ConsumersService', () => {
  let service: ConsumersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
