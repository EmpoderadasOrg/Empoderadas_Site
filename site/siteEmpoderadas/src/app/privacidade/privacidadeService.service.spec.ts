import { TestBed, async, inject } from '@angular/core/testing';
import { PrivacidadeService } from './privacidadeService.service';

describe('Service: PrivacidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivacidadeService]
    });
  });

  it('should ...', inject([PrivacidadeService], (service: PrivacidadeService) => {
    expect(service).toBeTruthy();
  }));
});