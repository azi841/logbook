import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute} from '@angular/router';




const baseUrl = `http://localhost:4000/users/reset`;

@Injectable({
  providedIn: 'root'
})
export class ChangepassService {

  constructor(private http: HttpClient,
              private route: ActivatedRoute ) { }
   

  resetPassword (token: string, password: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${baseUrl}/${token}`, {password: password, headers: headers})
  }

  authenticateToken(user: { resetPasswordToken: String;}) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(baseUrl, user, {headers: headers});   
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

}
