import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { CriarPensamento } from './componentes/pensamentos/criar-pensamento/criar-pensamento';
import { FormsModule } from '@angular/forms';
import { ListarPensamento } from './componentes/pensamentos/listar-pensamento/listar-pensamento';

@NgModule({
  declarations: [App, Cabecalho, Rodape, CriarPensamento, ListarPensamento],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
