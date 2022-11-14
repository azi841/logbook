import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:4000/users/authenticateMail/';

@Injectable({
  providedIn: 'root'
})

export class ForgotPassService {

  constructor(private http: HttpClient) { }
  
  authenticateMail(user: { email: String;}) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(baseUrl, user, {headers: headers});   
  }
  
  validateInputEmail(user: { email: String;}){
    if(user.email == ''){
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

  validateInputRePassword(user: { repassword: String;}){
    if(user.repassword == '') {
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

 
  