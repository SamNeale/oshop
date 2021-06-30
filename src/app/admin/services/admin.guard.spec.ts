import { TestBed } from '@angular/core/testing';

import { AdminGaurd } from './admin.guard';

describe('AdminGaurdGuard', () => {
  let guard: AdminGaurd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGaurd);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
