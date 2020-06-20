import { TestBed } from '@angular/core/testing';

import { LangageService } from './langage.service';

describe('LangageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LangageService = TestBed.get(LangageService);
    expect(service).toBeTruthy();
  });
});
