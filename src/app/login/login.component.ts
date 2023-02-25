import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AUTH } from 'src/utils/types';
import { LoginService } from './login.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password : new FormControl('')
  })

  user:AUTH = {
    email : '',
    password : ''
  };
  
  constructor(private loginService:LoginService, private route:Router){

  }
  ngOnInit(): void {
  }

  onSubmit = ():void => {
    this.user = {
      email: this.loginForm.get('email')?.value  ,
      password: this.loginForm.get('password')?.value 
    }
    this.loginService.auth(this.user).subscribe(
      {
        next : (res: any) =>{
          console.log(res);
          if(res.code === 'R_200'){
            this.loginForm.reset;
            this.route.navigate(['']);
          }
          else{
          }
        }
      }).unsubscribe;
  }
}
