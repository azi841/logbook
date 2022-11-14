import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }


  email: any;
  name: any;
  surname: any;
  phone: any;
  address: any;
  role: any;

  setEmail(newEmail:any) {
    this.email = newEmail
  }
  getEmail(){
    console.log(this.email);
  }

  setName(newName:any) {
    this.name = newName
  }
  getName(){
    console.log(this.name);
  }

  setSurname(newSurname:any) {
    this.surname = newSurname
  }
  getSurname(){
    console.log(this.surname);
  }

  setAddress(newAddress:any){
    this.address=newAddress;
  }
  getAddress(){
    console.log(this.address);
  }

  setPhone(newPhone:any){
    this.phone = newPhone
  }
  getPhone(){
    console.log(this.phone);
  }

  setRole(newRole:any){
    this.role = newRole
  }
  getRole(){
    console.log(this.role);
  }

  displayData(){
    console.log(this.name + " " + this.surname);
    console.log("Address: " + this.address);
    console.log("Phone: " + this.phone);
    console.log("Role: " + this.role);
  }
}
 