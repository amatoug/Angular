import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './pokemon-form/edit-pokemon.component';

const pokemonsRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  // ajouter la route d'édition 
  { path: 'pokemon/edit/:id', component: EditPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
