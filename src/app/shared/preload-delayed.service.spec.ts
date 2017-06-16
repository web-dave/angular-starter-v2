import { TestBed, inject } from '@angular/core/testing';

import { PreloadDelayedService } from './preload-delayed.service';

describe('PreloadDelayedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreloadDelayedService]
    });
  });

  it('should be created', inject([PreloadDelayedService], (service: PreloadDelayedService) => {
    expect(service).toBeTruthy();
  }));
});
