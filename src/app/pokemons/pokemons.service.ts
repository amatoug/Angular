import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PokemonsService {

  constructor(private http: HttpClient) { }

  private pokemonsUrl = 'api/pokemons';//le point d'accés à l'API
  // Retourne tous les pokémons   
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError('getPokemons', []))
    );

  }


  // Retourne le pokémon avec l'identifiant passé en paramètre   
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`; // syntaxe ES6

    // on initialise la liste de nos pokémons   
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  // La méthode updatePokemon persiste les modifications du pokémon via l’API 
  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }


  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    );
  }

  /** POST pokemon */
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap((pokemon: Pokemon) => this.log(`added pokemon with id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>('addPokemon'))
    );
  }


  getPokemonTypes(): Array<string> {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T); // je donne des explications of un peu plus tard.  
    }
  }

  private log(log: string) {
    console.info(log);
  }

}
