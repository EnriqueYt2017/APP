import { TestBed } from '@angular/core/testing';

import { JokesService } from './frases.service';

describe('FrasesService', () => {
  let service: JokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
