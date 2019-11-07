import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './pokemon-form/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon.component';



@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonFormComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    AddPokemonComponent],
  imports: [
    CommonModule,
    FormsModule,
    PokemonsRoutingModule
  ],
  providers: [PokemonsService]
})
export class PokemonsModule { }
