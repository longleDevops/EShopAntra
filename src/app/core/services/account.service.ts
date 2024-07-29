import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login,LoginResponse } from '../../shared/models/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  Login(LoginData: Login):Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>("urlhere",LoginData);
  }
}
