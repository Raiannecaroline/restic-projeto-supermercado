import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})

export class ListarComprasComponent {

  @Input() itens: SupermercadoItens[] = [];
  @Output() itemComprado = new EventEmitter<number>();
  @Output() itemDeletado = new EventEmitter<number>();

  marcarComoComprado(id: number) {
    this.itemComprado.emit(id);
  }

  deletarItem(id: number) {
    this.itemDeletado.emit(id);
  }

}
