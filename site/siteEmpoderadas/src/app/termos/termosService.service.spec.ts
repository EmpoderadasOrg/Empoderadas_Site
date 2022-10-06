import { TestBed, async, inject } from '@angular/core/testing';
import { Termos } from '../models/Termos';
import { TermosService } from './termosService.service';

describe('Service: TermosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermosService]
    });
  });

  it('should ...', inject([TermosService], (service: TermosService) => {
    expect(service).toBeTruthy();
  }));
});