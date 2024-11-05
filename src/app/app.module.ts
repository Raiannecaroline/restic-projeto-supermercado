import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { ListarComprasComponent } from './components/listar-compras/listar-compras.component';
import { AddListaItensComponent } from './components/add-lista-itens/add-lista-itens.component';
import { FormsModule } from '@angular/forms';
import { ItensCompradosComponent } from './components/itens-comprados/itens-comprados.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComprasComponent,
    AddListaItensComponent,
    ItensCompradosComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-28q01vv8zbc6620s.us.auth0.com',

      clientId: '5Cvp2TMY50VMNUEQMvlECAIwgrhL0N9S',

      authorizationParams: {

        redirect_uri: window.location.origin,

      },
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
