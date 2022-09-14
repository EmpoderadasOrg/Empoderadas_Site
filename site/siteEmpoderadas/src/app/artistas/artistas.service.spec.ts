/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtistasService } from './artistas.service';

describe('Service: Artistas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistasService]
    });
  });

  it('should ...', inject([ArtistasService], (service: ArtistasService) => {
    expect(service).toBeTruthy();
  }));
});
