import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemonsearch.component.html',
  styleUrls: ['./pokemonsearch.component.scss']
})
export class PokemonsearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router) { }

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'  �
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // attendre 300ms de pause entre chaque requ�te  
      debounceTime(300),
      // ignorer la recherche en cours si c'est la m�me que la pr�c�dente0
      distinctUntilChanged(),
      // pour chaque terme de recherche �
      // on renvoie la liste des Pok�mons correspondants � cette recherche.  
      switchMap((term: string) => this.pokemonsService.searchPokemons(term))
    );
  }

  gotoDetail(pokemon: Pokemon): void {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
