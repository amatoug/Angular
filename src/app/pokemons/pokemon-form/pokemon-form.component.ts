import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  // propriété d'entrée du composant     
  @Input() pokemon: Pokemon;
  // types disponibles pour un pokémon : 'Eau', 'Feu', etc.    
  types: Array<string>;

  isAddForm: boolean; // Le formulaire est-il en mode ajout (ou édition) ?

  constructor(private pokemonsService: PokemonsService, private router: Router) { }
  ngOnInit() {
    // Initialisation de la propriété types      
    this.types = this.pokemonsService.getPokemonTypes();

    // On determine le mode adopté par le formulaire grâce à l’url. 
    // Si l’url contient le mot ‘add’, alors le formulaire est en mode ‘ajout’. 
    // Sinon, c’est que le formulaire doit être en mode édition.
    this.isAddForm = this.router.url.includes('add');
  }

  // Détermine si le type passé en paramètres appartient ou non    
  // au pokémon en cours d'édition.    
  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (~index) return true; return false;
  }
  // Méthode appelée lorsque l'utilisateur ajoute ou retire   
  // un type au pokémon en cours d'édition.    
  selectType($event: any, type: string): void {
    let checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    }
    else {
      let index = this.pokemon.types.indexOf(type);
      if (~index) { this.pokemon.types.splice(index, 1); }
    }
  }

  // La méthode appelée lorsque le formulaire est soumis est différente 
  // en fonction du mode du formulaire.   
  // Nous effectuons deux actions différentes :  
  //  * Soit on ajoute un nouveau Pokémon. 
  //  * Soit on sauvegarde les modifications apportées sur un Pokémon.
  onSubmit(): void {
    if (this.isAddForm) { // Le formulaire est en mode ajout.  
      this.pokemonsService.addPokemon(this.pokemon)
        .subscribe(pokemon => {
          this.pokemon = pokemon;
          this.goBack()
        });
    } else { // Le formulaire est en mode édition.  
      this.pokemonsService.updatePokemon(this.pokemon)
        .subscribe(_ => this.goBack());
    }

  }


  goBack(): void {
    let link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }


  // valide le nombre de types pour chaque pokémon (entre 1 et 3)  
  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }


}
