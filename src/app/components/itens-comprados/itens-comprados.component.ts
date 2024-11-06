import { Component, Input } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';
import { SupermercadoListaService } from 'src/app/services/supermercado-lista/supermercado-lista.service';

@Component({
  selector: 'app-itens-comprados',
  templateUrl: './itens-comprados.component.html',
  styleUrls: ['./itens-comprados.component.css']
})
export class ItensCompradosComponent {

  // Input pega os elementos do componente pai e passa para o filho
  @Input() comprados: SupermercadoItens[] = [];

  constructor(
    private supermercadoListaService: SupermercadoListaService
  ) { }

  // Remove o item ou tenta
  removerItem(id: number) {
    this.supermercadoListaService.deletarItem(id);
  }

}
