import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Login, Signup, VerifyAccount } from '../../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = `${environment.authUrl}auth/`;

  public constructor(private http: HttpClient) { }

  public signup(user: Signup) {
    return this.http.post(`${this.authUrl}signup`, user);
  }
  public login(user: Login) {
    return this.http.post(`${this.authUrl}login`, user);
  }
  public verifyAccount(code: VerifyAccount) {
    return this.http.post(`${this.authUrl}verify-account`, code);
  }
}
