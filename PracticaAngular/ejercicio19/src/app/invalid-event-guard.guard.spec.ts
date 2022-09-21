import { TestBed } from '@angular/core/testing';

import { InvalidEventGuardGuard } from './invalid-event-guard.guard';

describe('InvalidEventGuardGuard', () => {
  let guard: InvalidEventGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InvalidEventGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
