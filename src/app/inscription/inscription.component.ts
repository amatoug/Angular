import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
	form: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
		// On initialise notre formulaire piloté par le modèle
    this.form = this.fb.group({
      'name': this.fb.group({
        firstName:['',Validators.compose([Validators.minLength(3),Validators.maxLength(25)])],
        lastName:['',Validators.compose([Validators.minLength(3),Validators.maxLength(25)])]
      }),
      email : ['',Validators.pattern('^[a-z0-9._-] +@[a-z0-9._-]{2,}\.[a-z]{2,4}$')],
      'verification': this.fb.group({
        password:['',Validators.compose([Validators.required,Validators.minLength(8)])],
        passwordConfirm :['',Validators.compose([Validators.required,Validators.minLength(8)])]
      })
    })
    
  }
}
