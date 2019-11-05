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
  constructor(private pokemonsService: PokemonsService, private router: Router) { }
  ngOnInit() {
    // Initialisation de la propriété types      
    this.types = this.pokemonsService.getPokemonTypes();
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
  // La méthode appelée lorsque le formulaire est soumis.     
  onSubmit(): void {
    console.log("Submit form !");
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
