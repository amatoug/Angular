import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  // déclarez BorderCardDirective dans le module racine de l'application
// on déclare notre pipe PokemonTypeColorPipe dans le module

  declarations: [
    AppComponent,PageNotFoundComponent, InscriptionComponent

  ],
  imports: [
    BrowserModule,
    PokemonsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
