import { Injectable } from '@angular/core';
import { SupermercadoItens } from '../models/supermercado-itens.model';

@Injectable({
  providedIn: 'root'
})
export class SupermercadoListaService {

  // Chave usada para armazenar a lista de itens no localStorage
  private readonly storageKey = 'listaSupermercado';
  // Mensagem para exibir notificações ao usuário
  mensagem: string | null = null;

  constructor() {
    this.initStorage();
  }

  // Função de inicializar o salvamento de itens no local Storage
  private initStorage() {
    if (!this.getItems()) {
      this.saveItems([]);
    }
  }

  // Função para pegar os itens armazenados no local Storage
  getItems(): SupermercadoItens[] {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  // Função que salva os itens no local storage
  saveItems(itens: SupermercadoItens[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(itens));
  }

  // Função que adiciona itens a lista de compras
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

  // Função que altera a compra do cliente
  alterarCompra(id: number) {
    const itens = this.getItems();
    const item = itens.find((item) => item.id === id);
    if (item) {
      item.comprado = !item.comprado;
      this.saveItems(itens);
    }
  }

  // Função que pede para deletar
  deletarItem(id: number) {
    let itens = this.getItems();
    itens = itens.filter((item) => item.id !== id);
    this.saveItems(itens);
  }

  // Função limpa mensagens
  private limparMensagem() {
    setTimeout(() => {
      this.mensagem = null;
    }, 3000);
  }
}
