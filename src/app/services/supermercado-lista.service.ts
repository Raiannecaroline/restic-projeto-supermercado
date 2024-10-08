import { Injectable } from '@angular/core';
import { SupermercadoItens } from '../models/supermercado-itens.model';

@Injectable({
  providedIn: 'root'
})
export class SupermercadoListaService {

  private itens: SupermercadoItens[] = [
    new SupermercadoItens(1, 'Maçã'),
    new SupermercadoItens(2, 'Leite', true),
    new SupermercadoItens(3, 'Pão')
  ];

  getItems(): SupermercadoItens[] {
    return this.itens;
  }

  addItem(nome: string): void {
    const novoItem = new SupermercadoItens(this.itens.length + 1, nome);
    this.itens.push(novoItem);
  }

  alterarCompra(id: number): void {
    const item = this.itens.find(i => i.id === id);
    if (item) {
      item.comprado = !item.comprado;
    }
  }

  deletarItem(id: number): void {
    this.itens = this.itens.filter(item => item.id !== id);
  }
}
