import { Component, EventEmitter, Output } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-add-lista-itens',
  templateUrl: './add-lista-itens.component.html',
  styleUrls: ['./add-lista-itens.component.css']
})
export class AddListaItensComponent {

  nomeItem: string = '';

  @Output() itemAdicionado = new EventEmitter<SupermercadoItens>();

  adicionarItem() {
    if (this.nomeItem.trim()) {
      const novoItem: SupermercadoItens = {
        id: Date.now(),
        nome: this.nomeItem,
        comprado: false
      };
      this.itemAdicionado.emit(novoItem);
      this.nomeItem = '';
    }
  }

}
