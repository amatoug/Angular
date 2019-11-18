import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard, AuthService
  ]
})
export class LoginRoutingModule { }
