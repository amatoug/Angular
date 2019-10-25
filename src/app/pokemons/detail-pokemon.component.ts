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
  constructor(private route: ActivatedRoute, private router: Router,private pokemonsService : PokemonsService) { }

  ngOnInit(): void {
    // on récupère le paramère 'id' contenu dans l'url   
    let id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonsService.getPokemon(id); 
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
    }

  }