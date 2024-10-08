import { SupermercadoListaService } from './../../services/supermercado-lista.service';
import { Component } from '@angular/core';
import { SupermercadoItens } from 'src/app/models/supermercado-itens.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  itens: SupermercadoItens[] = [];

  constructor(private supermercadoListaService: SupermercadoListaService) {
    this.itens = this.supermercadoListaService.getItems();
  }

  addItem(item: SupermercadoItens) {
    this.supermercadoListaService.addItem(item.nome);
    this.itens = this.supermercadoListaService.getItems();
  }

  togglePurchased(id: number) {
    this.supermercadoListaService.alterarCompra(id);
    this.itens = this.supermercadoListaService.getItems();
  }

  deleteItem(id: number) {
    this.supermercadoListaService.deletarItem(id);
    this.itens = this.supermercadoListaService.getItems();
  }

}
