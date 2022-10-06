
import { TestBed, async, inject } from '@angular/core/testing';
import { SobreService } from './sobreService.service';

describe('Service: HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SobreService]
    });
  });

  it('should ...', inject([SobreService], (service: SobreService) => {
    expect(service).toBeTruthy();
  }));
});
