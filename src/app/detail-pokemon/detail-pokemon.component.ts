import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

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
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // on initialise la liste de nos pokémons   
    this.pokemons = POKEMONS;
    // on récupère le paramère 'id' contenu dans l'url   
    let id = +this.route.snapshot.paramMap.get('id');
    // on itère sur le tableau de pokémon ensuite pour trouver  
    // le pokémon ayant le bon identifiant  
    for (let i = 0; i < this.pokemons.length; i++) {
      // si on trouve un pokémon avec le bon identifiant,  
      // on affecte ce pokémon à la propriété du composant   
      if (this.pokemons[i].id == id) { this.pokemon = this.pokemons[i]; }
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
    }

  }