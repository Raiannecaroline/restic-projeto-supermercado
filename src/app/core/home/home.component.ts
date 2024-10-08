import { SupermercadoListaService } from './../../services/supermercado-lista.service';
import { Component } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Array para armazenar os itens que ainda não foram comprados
  itensNaoComprados: SupermercadoItens[] = [];
  // Array para armazenar os itens que já foram comprados
  itensComprados: SupermercadoItens[] = [];
  // Variável para armazenar mensagens de feedback para o usuário
  mensagem: string | null = null;

  constructor(private supermercadoListaService: SupermercadoListaService) {
    this.atualizarItens();
  }

  // Função para adicionar o item e verificação para ver se  item ja foi adicionada na lista
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

  // Função para marcar os itens comprados
  marcarComoComprado(id: number) {
    this.supermercadoListaService.alterarCompra(id);
    this.atualizarItens();
  }

  // Função para remover os itens da lista e verificações para ve se o mesmo foi retirado
  removerItem(id: number) {
    const itemRemovido = this.itensNaoComprados.find((item) => item.id === id);
    this.supermercadoListaService.deletarItem(id);
    this.atualizarItens();
    this.mensagem = `Item "${itemRemovido?.nome}" removido com sucesso!`;
    this.limparMensagem();
  }

  // Atualiza os itens da lista
  atualizarItens() {
    const todosItens = this.supermercadoListaService.getItems();
    this.itensNaoComprados = todosItens.filter((item) => !item.comprado);
    this.itensComprados = todosItens.filter((item) => item.comprado);
  }

  // Função mensagens
  private limparMensagem() {
    setTimeout(() => {
      this.mensagem = null;
    }, 3000);
  }
}
