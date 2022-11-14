import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterPatientService {
  patient: any;

  constructor(private http: HttpClient) {}

  registerPatient(patient: { name: String; surname: String; }) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/patients/register/', patient, {headers: headers});
  }

  validateInputName(patient: { name: String;}){
    if(patient.name == '') {
      return false;
    } 
    else {
      return true;
    }  
  }

  validateInputSurname(patient: { surname: String;}){
    if(patient.surname == '') {
      return false;
    } 
    else {
      return true;
    }  
  }

  validateInputPhone(patient: { phone: String;}){
    if(patient.phone == '') {
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
  validateInputAddress(patient: { address: String;}){
    if(patient.address == '') {
      return false;
    } 
    else {
      return true;
    }  
  }

  validateInputDiagnose(patient: { diagnosis: String;}){
    if(patient.diagnosis == '') {
      return false;
    } 
    else {
      return true;
    }  
  }
}
