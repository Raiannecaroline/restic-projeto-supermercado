import { SupermercadoListaService } from './../../services/supermercado-lista.service';
import { Component } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  itensNaoComprados: SupermercadoItens[] = [];
  itensComprados: SupermercadoItens[] = [];
  mensagem: string | null = null;

  constructor(private supermercadoListaService: SupermercadoListaService) {
    this.atualizarItens();
  }

  adicionarItem(nome: string) {
    const itemExistente = this.supermercadoListaService.getItems().find(item => item.nome.toLowerCase() === nome.toLowerCase());

    if (itemExistente) {
      this.mensagem = `O item "${nome}" já está na lista.`;
    } else {
      this.supermercadoListaService.addItem(nome);
      this.atualizarItens();
      this.mensagem = `Item "${nome}" adicionado com sucesso!`;
    }
    this.limparMensagem();
  }

  marcarComoComprado(id: number) {
    this.supermercadoListaService.alterarCompra(id);
    this.atualizarItens();
  }

  removerItem(id: number) {
    const itemRemovido = this.itensNaoComprados.find((item) => item.id === id);
    this.supermercadoListaService.deletarItem(id);
    this.atualizarItens();
    this.mensagem = `Item "${itemRemovido?.nome}" removido com sucesso!`;
    this.limparMensagem();
  }

  atualizarItens() {
    const todosItens = this.supermercadoListaService.getItems();
    this.itensNaoComprados = todosItens.filter((item) => !item.comprado);
    this.itensComprados = todosItens.filter((item) => item.comprado);
  }

  private limparMensagem() {
    setTimeout(() => {
      this.mensagem = null;
    }, 3000);
  }
}
