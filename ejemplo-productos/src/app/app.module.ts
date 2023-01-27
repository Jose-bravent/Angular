import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { ListadoComponent } from './listado/listado.component';
import { FichaComponent } from './ficha/ficha.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { Page404Component } from './page404/page404.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioProductoComponent,
    ListadoComponent,
    FichaComponent,
    CabeceraComponent,
    Page404Component,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
