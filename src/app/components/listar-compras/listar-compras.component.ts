import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})

export class ListarComprasComponent {

  // O decorator input serve para passar elementos do componente pai para o filho
  @Input() itens: SupermercadoItens[] = [];
  // O decorator output serve para que o filho emita eventos do elemento pai
  @Output() itemComprado = new EventEmitter<number>();
  @Output() itemDeletado = new EventEmitter<number>();

  // Marcou como comprado
  marcarComoComprado(id: number) {
    this.itemComprado.emit(id);
  }

  // Deletou o item
  deletarItem(id: number) {
    this.itemDeletado.emit(id);
  }

}
