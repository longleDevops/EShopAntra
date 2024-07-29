import { Component } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { NgForm } from '@angular/forms';
import { Login, LoginResponse } from '../../shared/models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private accountService:AccountService, private router:Router){

  }

  isLoginSuccessful:boolean = false;

  // generating a temporary variable
  loginData:Login = {username:"",password:""};
  loginResponse:LoginResponse={username:"",jwtToken:"",expiresIn:0};

  Login(loginData:Login){
    this.accountService.Login(loginData).subscribe(l=>{
      this.loginResponse=l;
      if (this.loginResponse.jwtToken!=""&& this.loginResponse.expiresIn>0){
        this.isLoginSuccessful=true;
        localStorage.setItem("token",this.loginResponse.jwtToken);
        localStorage.setItem("expiration",this.loginResponse.expiresIn.toString());
        localStorage.setItem("loginTime", Date.now().toString());
      }
      console.log(this.loginResponse);
      this.router.navigateByUrl('/')
    })
  }
}
