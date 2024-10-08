import { Injectable } from '@angular/core';
import { SupermercadoItens } from '../models/supermercado-itens.model';

@Injectable({
  providedIn: 'root'
})
export class SupermercadoListaService {

  private readonly storageKey = 'listaSupermercado';
  mensagem: string | null = null;

  constructor() {
    this.initStorage();
  }

  private initStorage() {
    if (!this.getItems()) {
      this.saveItems([]);
    }
  }

  getItems(): SupermercadoItens[] {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  saveItems(itens: SupermercadoItens[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(itens));
  }

  addItem(nome: string) {
    const itens = this.getItems();
    const itemExistente = itens.find(item => item.nome.toLowerCase() === nome.toLowerCase());

    if (!itemExistente) {
      const novoItem: SupermercadoItens = { id: Date.now(), nome, comprado: false };
      itens.push(novoItem);
      this.saveItems(itens);
    } else {
      this.mensagem = `O Item "${nome}" já está na lista!`;
      this.limparMensagem();
    }
  }

  alterarCompra(id: number) {
    const itens = this.getItems();
    const item = itens.find((item) => item.id === id);
    if (item) {
      item.comprado = !item.comprado;
      this.saveItems(itens);
    }
  }

  deletarItem(id: number) {
    let itens = this.getItems();
    itens = itens.filter((item) => item.id !== id);
    this.saveItems(itens);
  }

  private limparMensagem() {
    setTimeout(() => {
      this.mensagem = null;
    }, 3000);
  }
}
