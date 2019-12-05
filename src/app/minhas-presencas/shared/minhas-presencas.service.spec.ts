import { TestBed } from '@angular/core/testing';

import { MinhasPresencasService } from './minhas-presencas.service';

describe('MinhasPresencasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinhasPresencasService = TestBed.get(MinhasPresencasService);
    expect(service).toBeTruthy();
  });
});
