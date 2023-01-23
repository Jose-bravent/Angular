import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ImcComponent } from './imc/imc.component';
import { EjemploCiudadComponent } from './ejemplo-ciudad/ejemplo-ciudad.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    GaleriaComponent,
    ImcComponent,
    EjemploCiudadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
