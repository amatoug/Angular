import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonsService {

  constructor() { }

  // Retourne tous les pokémons   
  getPokemons(): Pokemon[] {
    return POKEMONS;
  }


  // Retourne le pokémon avec l'identifiant passé en paramètre   
  getPokemon(id: number) {
    // on initialise la liste de nos pokémons   
    let pokemons = this.getPokemons();
    // on itère sur le tableau de pokémon ensuite pour trouver  
    // le pokémon ayant le bon identifiant
    for (let index = 0; index < pokemons.length; index++) {
      if (id === pokemons[index].id) {
        return pokemons[index];
      }
    }
  }

  getPokemonTypes(): Array<string> {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }


}
