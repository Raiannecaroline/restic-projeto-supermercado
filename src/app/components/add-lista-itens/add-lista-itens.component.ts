import { Component, EventEmitter, Output } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-add-lista-itens',
  templateUrl: './add-lista-itens.component.html',
  styleUrls: ['./add-lista-itens.component.css']
})
export class AddListaItensComponent {

  @Output() itemAdicionado = new EventEmitter<string>();
  nomeItem: string = '';

  adicionarItem() {
    if (this.nomeItem.trim()) {
      this.itemAdicionado.emit(this.nomeItem.trim());
      this.nomeItem = ''; // Limpa o input após adicionar
    }
  }

}
