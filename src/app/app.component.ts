import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemons/pokemon';
import { POKEMONS } from './pokemons/mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = null;

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez cliqué sur " + pokemon.name);
  }

}