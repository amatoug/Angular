import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  // déclarez BorderCardDirective dans le module racine de l'application
// on déclare notre pipe PokemonTypeColorPipe dans le module

  declarations: [
    AppComponent,BorderCardDirective,PokemonTypeColorPipe, DetailPokemonComponent, ListPokemonComponent, PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
