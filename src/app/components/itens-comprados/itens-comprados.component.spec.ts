import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCompradosComponent } from './itens-comprados.component';

describe('ItensCompradosComponent', () => {
  let component: ItensCompradosComponent;
  let fixture: ComponentFixture<ItensCompradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItensCompradosComponent]
    });
    fixture = TestBed.createComponent(ItensCompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
