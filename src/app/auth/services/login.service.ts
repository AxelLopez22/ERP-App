import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Token } from '../models/models';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "https://localhost:7034/api/Login";

  constructor(private router:Router, private http: HttpClient, private jwt: JwtHelperService) { }

  GetUserLogin(){
    let token = this.jwt.decodeToken();
    let user: object = {
      userName: token.Usuario,
    }
    return user;
  }

  Login(user: Login){
    return this.http.post(this.baseUrl, user);
  }

  Authenticate(token: Token){
    return this.http.post(this.baseUrl + '/Authenticate', token);
  }

  logout(token: string | null){
    return this.http.post(this.baseUrl + `/logout?token=${token}`,[] );
  }

  isAuthenticated():boolean{
    // @ts-ignore
    return localStorage.getItem('token');
  }

  saveToken(token:string):void{
    localStorage.setItem('token', token)
  }

  getUsernameAuthenticated():string{
    const user_info = JSON.parse(localStorage.getItem('user-info') || '{}' );
    return user_info;
  }

  ObtenerEstructura(userName: string){
    return this.http.get(this.baseUrl + `/estructura?userName=${userName}`);
  }
}
