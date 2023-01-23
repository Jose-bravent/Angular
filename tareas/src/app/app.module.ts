import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioTareasComponent } from './formulario-tareas/formulario-tareas.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioTareasComponent,
    ListadoTareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
