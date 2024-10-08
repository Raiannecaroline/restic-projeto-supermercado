import { Injectable } from '@angular/core';
import { SupermercadoItens } from '../models/supermercado-itens.model';

@Injectable({
  providedIn: 'root'
})
export class SupermercadoListaService {

  private itens: SupermercadoItens[] = [];

  constructor() {}

  getItems(): SupermercadoItens[] {
    return this.itens;
  }

  addItem(nome: string): void {
    const novoItem: SupermercadoItens = {
      id: Date.now(),
      nome: nome,
      comprado: false
    };
    this.itens.push(novoItem);
  }

  alterarCompra(id: number): void {
    const item = this.itens.find(item => item.id === id);
    if (item) {
      item.comprado = !item.comprado;
    }
  }

  deletarItem(id: number): void {
    this.itens = this.itens.filter(item => item.id !== id);
  }
}
