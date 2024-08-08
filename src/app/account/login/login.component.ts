import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../core/services/account.service';
import { Router } from '@angular/router';
import { Login, LoginResponse } from '../../shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoginSuccessful: boolean = false;
  loginResponse: LoginResponse = { username: "", jwtToken: "", expiresIn: 0 };

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData: Login = this.loginForm.value;
      this.accountService.Login(loginData).subscribe(l => {
        this.loginResponse = l;
        if (this.loginResponse.jwtToken !== "" && this.loginResponse.expiresIn > 0) {
          this.isLoginSuccessful = true;
          localStorage.setItem("token", this.loginResponse.jwtToken);
          localStorage.setItem("expiration", this.loginResponse.expiresIn.toString());
          localStorage.setItem("loginTime", Date.now().toString());
        }
        console.log(this.loginResponse);
        this.router.navigateByUrl('/');
      });
    }
  }
}
