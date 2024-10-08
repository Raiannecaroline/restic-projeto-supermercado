import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListaItensComponent } from './add-lista-itens.component';

describe('AddListaItensComponent', () => {
  let component: AddListaItensComponent;
  let fixture: ComponentFixture<AddListaItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddListaItensComponent]
    });
    fixture = TestBed.createComponent(AddListaItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
