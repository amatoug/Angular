import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	template: `
    <div class='row'>
    <div class="col s12 m4 offset-m4">
    <div class="card hoverable">
      <div class="card-content center">
        <span class="card-title">Page de connexion</span>
        <p><em>{{message}}</em></p>
      </div>
			<form #loginForm="ngForm">
	      <div>
					<label for="name">Name</label>
	        <input type="text" id="name" [(ngModel)]="name" name="name" required>
	      </div>
	      <div>
	        <label for="password">Password</label>
	        <input type="password" id="password" [(ngModel)]="password" name="password" required>
	      </div>
	    </form>
      <div class="card-action center">
        <a (click)="login()" class="waves-effect waves-light btn"  *ngIf="!authService.isLoggedIn">Se connecter</a>
        <a (click)="logout()" *ngIf="authService.isLoggedIn">Se d�connecter</a>
      </div>
    </div>
    </div>
    </div>`
})
export class LoginComponent {
	message: string = 'Vous �tes d�connect�. (pikachu/pikachu)';
	private name: string;
	private password: string;

	constructor(private authService: AuthService, private router: Router) { }

	// Informe l'utilisateur sur son authentfication.
	setMessage() {
		this.message = this.authService.isLoggedIn ?
			'Vous �tes connect�.' : 'Identifiant ou mot de passe incorrect.';
	}

	// Connecte l'utilisateur aupr�s du Guard
	login() {
		this.message = 'Tentative de connexion en cours ...';
		this.authService.login(this.name, this.password).subscribe(() => {
			this.setMessage();
			if (this.authService.isLoggedIn) {
				// R�cup�re l'URL de redirection depuis le service d'authentification
				// Si aucune redirection n'a �t� d�finis, redirige l'utilisateur vers la liste des pokemons.
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemon/all';
				// Redirige l'utilisateur
				this.router.navigate([redirect]);
			} else {
				this.password = '';
			}
		});
	}

	// D�connecte l'utilisateur
	logout() {
		this.authService.logout();
		this.setMessage();
	}
}