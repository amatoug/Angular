import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';


@Injectable()
export class AuthService {
  isLoggedIn: boolean = false; // L'utilisateur est-il connect� ?  �
  redirectUrl: string; // o� rediriger l'utilisateur apr�s l'authentification ?   

  // Une m�thode de connexion
  login(name: string, password: string): Observable<boolean> {
    // Faites votre appel � un service d'authentification si besoin ...  �
    let isLoggedIn = (name === 'pikachu' && password === 'pikachu');

    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = isLoggedIn));
  }

  // D�connexion  
  logout(): void {
    this.isLoggedIn = false;
  }
}

