import { TestBed } from '@angular/core/testing';
import { Auth0Service } from './auth.service';



describe('Auth0Service', () => {
  let service: Auth0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
