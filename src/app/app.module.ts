import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { ListarComprasComponent } from './components/listar-compras/listar-compras.component';
import { AddListaItensComponent } from './components/add-lista-itens/add-lista-itens.component';
import { FormsModule } from '@angular/forms';
import { ItensCompradosComponent } from './components/itens-comprados/itens-comprados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComprasComponent,
    AddListaItensComponent,
    ItensCompradosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
