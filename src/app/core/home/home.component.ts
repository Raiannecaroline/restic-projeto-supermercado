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

  constructor(private supermercadoListaService: SupermercadoListaService) {
    this.atualizarItens();
  }

  adicionarItem(nome: string) {
    this.supermercadoListaService.addItem(nome);
    this.atualizarItens();
  }

  marcarComoComprado(id: number) {
    this.supermercadoListaService.alterarCompra(id);
    this.atualizarItens();
  }

  removerItem(id: number) {
    this.supermercadoListaService.deletarItem(id);
    this.atualizarItens();
  }

  atualizarItens() {
    const todosItens = this.supermercadoListaService.getItems();
    this.itensNaoComprados = todosItens.filter(item => !item.comprado);
    this.itensComprados = todosItens.filter(item => item.comprado);
  }
}
