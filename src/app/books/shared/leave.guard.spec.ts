import { TestBed, async, inject } from '@angular/core/testing';

import { LeaveGuard } from './leave.guard';

describe('LeaveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveGuard]
    });
  });

  it('should ...', inject([LeaveGuard], (guard: LeaveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
