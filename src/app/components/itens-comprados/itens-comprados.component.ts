import { Component, Input } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';
import { SupermercadoListaService } from 'src/app/services/supermercado-lista.service';

@Component({
  selector: 'app-itens-comprados',
  templateUrl: './itens-comprados.component.html',
  styleUrls: ['./itens-comprados.component.css']
})
export class ItensCompradosComponent {

  @Input() comprados: SupermercadoItens[] = [];

  constructor(
    private supermercadoListaService: SupermercadoListaService
  ) {}

  removerItem(id: number) {
    this.supermercadoListaService.deletarItem(id);
  }

}
