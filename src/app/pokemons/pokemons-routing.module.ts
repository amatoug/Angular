import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';

const pokemonsRoutes: Routes = [    
  { path: 'pokemons', component: ListPokemonComponent },    
  { path: 'pokemon/:id', component: DetailPokemonComponent }   
 ];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
