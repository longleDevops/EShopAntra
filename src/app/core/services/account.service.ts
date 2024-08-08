import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login,LoginResponse } from '../../shared/models/login';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  loginUrl:string = environment.baseUrl+'/authentication/api/Authentication/login'
  Login(LoginData: Login):Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.loginUrl,LoginData);
  }
}
