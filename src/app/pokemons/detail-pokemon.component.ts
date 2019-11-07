import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  // liste des pokémons de notre application 
  pokemons: Pokemon[] = null;

  // pokémon à afficher dans le template
  pokemon: Pokemon = null;

  // on injecte 'route' pour récupérer les paramètres de l'url,  
  //  et 'router' pour rediriger l'utilisateur.   
  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    // on récupère le paramère 'id' contenu dans l'url   
    let id = +this.route.snapshot.paramMap.get('id');
    this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  
  // Nouvelle méthode de suppression d’un Pokémon 
  delete(pokemon: Pokemon): void {
    this.pokemonsService.deletePokemon(pokemon)
      .subscribe(_ => this.goBack());
  }
  
  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

  // On crée une méthode qui s'occupe de la redirection  
  goEdit(pokemon: Pokemon): void {
    let link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }


}