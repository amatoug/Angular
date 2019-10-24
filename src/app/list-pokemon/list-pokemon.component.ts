import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  constructor(private router: Router) {}
  pokemons: Pokemon[] = null;

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
