import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user: { email: String; password: String; }) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/users/register/', user, {headers: headers});
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

  validatePasswordLength(user: { password: String;}){
    if(user.password.length < 6) {
      return false;
    } 
    else {
      return true;
    }   
  }

  validateInputName(user: { name: String;}){
    if(user.name == '') {
      return false;
    } 
    else {
      return true;
    }  
  }

  validateInputSurname(user: { surname: String;}){
    if(user.surname == '') {
      return false;
    } 
    else {
      return true;
    }  
  }

  validateInputPhone(user: { phone: String;}){
    if(user.phone == '') {
      return false;
    } 
    else {
      return true;
    }  
  }
  validatePhone(phone: string) {
    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    return re.test(phone);
  }

  validateInputRole(user: { role: String;}){
    if(user.role == '') {
      return false;
    } 
    else {
      return true;
    }  
  }

  validateRole(user: { role: String;}){
    if(user.role == 'Professor' || user.role == 'professor' || user.role == 'student' || user.role == 'Student') {
      return true;
    } 
    else {
      return false;
    }  
  }

  validateInputAddress(user: { address: String;}){
    if(user.address == '') {
      return false;
    } 
    else {
      return true;
    }  
  }
  

}



