import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './pokemon-form/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon.component';
import { AuthGuard } from '../auth.guard';

const pokemonsRoutes: Routes = [
  {
    path:'pokemon',
    canActivate:[AuthGuard],
    children:[
      {path:'all',component:ListPokemonComponent},
      {path:'add',component:AddPokemonComponent},
      {path:'edit/:id',component:EditPokemonComponent},
      {path:':id',component:DetailPokemonComponent}
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
