import { Component, Input } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-itens-comprados',
  templateUrl: './itens-comprados.component.html',
  styleUrls: ['./itens-comprados.component.css']
})
export class ItensCompradosComponent {

  @Input() itens: SupermercadoItens[] = [];

  get comprados() {
    return this.itens.filter(item => item.comprado);
  }

}
