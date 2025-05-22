import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Login, LoginResponse, Signup, SignupResponse, SuccessResponse, VerifyAccount} from '../../interface/auth';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authUrl = `${environment.authUrl}auth/`;

  public constructor(private http: HttpClient) {}

  public signup(user: Signup) {
    return this.http.post<SignupResponse>(`${this.authUrl}signup`, user);
  }
  public login(user: Login) {
    return this.http.post<LoginResponse>(`${this.authUrl}login`, user);
  }
  public verifyAccount(code: VerifyAccount, token: string) {
    return this.http.post<SuccessResponse>(`${this.authUrl}verify-account?token=${token}`, code);
  }
}
