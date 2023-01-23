import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FichaComponent } from './ficha/ficha.component';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaComponent,
    FormularioPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
