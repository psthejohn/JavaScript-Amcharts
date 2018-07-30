import { TestBed, inject } from '@angular/core/testing';

import { ChartconfigService } from './chartconfig.service';

describe('ChartconfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartconfigService]
    });
  });

  it('should be created', inject([ChartconfigService], (service: ChartconfigService) => {
    expect(service).toBeTruthy();
  }));
});
