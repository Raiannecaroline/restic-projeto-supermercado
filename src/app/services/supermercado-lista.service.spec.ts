import { TestBed } from '@angular/core/testing';

import { SupermercadoListaService } from './supermercado-lista.service';

describe('SupermercadoListaService', () => {
  let service: SupermercadoListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupermercadoListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
