import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Oauth2RedirectComponent } from './oauth2-redirect/oauth2-redirect.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
      path: "signup",
      component: SignupComponent
  },
  {
      path: "oauth2",
      component: Oauth2RedirectComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{
  ngOnInit(): void {
    console.log("xxxx");
  } 

}
