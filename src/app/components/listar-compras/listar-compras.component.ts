import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})

export class ListarComprasComponent {

  @Input() itens: SupermercadoItens[] = [];
  @Output() togglePurchased = new EventEmitter<number>();
  @Output() deleteItem = new EventEmitter<number>();

  alterarCompra(id: number) {
    this.togglePurchased.emit(id);
  }

  deletarItem(id: number) {
    this.deleteItem.emit(id);
  }

}
