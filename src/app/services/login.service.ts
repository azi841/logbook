import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:4000/users/authenticate/';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
 
  user: any;
  isAuthenticated = false;

  constructor(private http: HttpClient) { }

  setAuth(data:boolean) {
    
    this.isAuthenticated = data;
  }
  
  getAuth() {
    return this.isAuthenticated;
  }
  
  
  authenticateUser(user: { email: String; password: String; }) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(baseUrl, user, {headers: headers});
  }

  validateInputEmail(user: { email: String;}){
    if(user.email == '') {
      return false;
    } 
    else {
      return true;
    }  
  }

  validateInputPassword(user: { password: String;}){
    if(user.password == '') {
      return false;
    } 
    else {
      return true;
    }   
  }

  validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}

 
  