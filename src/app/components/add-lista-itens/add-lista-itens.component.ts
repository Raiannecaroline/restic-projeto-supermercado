import { Component, EventEmitter, Output } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-add-lista-itens',
  templateUrl: './add-lista-itens.component.html',
  styleUrls: ['./add-lista-itens.component.css']
})
export class AddListaItensComponent {

  // Utiliza o evento do componente filho para que consiga emiti-los no pai
  @Output() itemAdicionado = new EventEmitter<string>();
  nomeItem: string = '';

  adicionarItem() {
    if (this.nomeItem.trim()) {
      this.itemAdicionado.emit(this.nomeItem.trim()); // O trim() seria uma função de manipulação de strings
      this.nomeItem = ''; // Limpa o input após adicionar
    }
  }

}
