import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})

export class ListarComprasComponent {

  itens: SupermercadoItens[] = []; // Sua lista de itens
  temItensNaoComprados: boolean = false;
  temItensComprados: boolean = false;

  constructor() {
    // Inicialize seus itens aqui
    this.itens = [
      { id: 1, nome: 'Maçã', comprado: false },
      { id: 2, nome: 'Banana', comprado: true }
    ];
    this.verificarItens();
  }

  verificarItens() {
    this.temItensNaoComprados = this.itens.some(item => !item.comprado);
    this.temItensComprados = this.itens.some(item => item.comprado);
  }

  alterarCompra(id: number) {
    const item = this.itens.find(item => item.id === id);
    if (item) {
      item.comprado = !item.comprado; // Alterna o estado de comprado
      this.verificarItens(); // Recalcula os itens após a alteração
    }
  }

  deletarItem(id: number) {
    this.itens = this.itens.filter(item => item.id !== id);
    this.verificarItens(); // Recalcula os itens após a exclusão
  }

}
