import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsRoutingModule } from './pokemons-routing.module';



@NgModule({
  declarations: [ListPokemonComponent, DetailPokemonComponent, BorderCardDirective, PokemonTypeColorPipe],
  imports: [
    CommonModule,
    PokemonsRoutingModule
    ]
})
export class PokemonsModule { }
