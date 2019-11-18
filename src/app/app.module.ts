import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  // déclarez BorderCardDirective dans le module racine de l'application
  // on déclare notre pipe PokemonTypeColorPipe dans le module

  declarations: [
    AppComponent, PageNotFoundComponent, InscriptionComponent, LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    PokemonsModule,
    LoginRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
