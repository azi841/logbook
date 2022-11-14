import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { ForgotPassService } from 'src/app/services/forgotpass-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  email!: String;
  password!: String; 
  name!: String;
  surname!: String;
  address!: String;
  phone!: Number;
  role!: String;

  isEmail : boolean = false;
  isPassword : boolean = false;
  isName : boolean = false;
  isSurname : boolean = false;
  isAddress : boolean = false;
  isPhone : boolean = false;
  isRole : boolean = false;
  isTakenEmail : boolean = false;
  public showPassword!: boolean;

  constructor(
    private loginService: LoginService, 
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private forgotpassService: ForgotPassService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: [''],
      password: [''],
      name: [''],
      surname: [''],
      address: [''],
      phone: [''],
      role: ['']
    }) 
  }

  registerUser(): void {
    const user = {
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,      
      name: this.registrationForm.value.name,
      surname: this.registrationForm.value.surname,
      phone: this.registrationForm.value.phone,
      address: this.registrationForm.value.address,
      role: this.registrationForm.value.role
    }

    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    var error5 = document.getElementById("error5");
    var error6 = document.getElementById("error6");
    var error7 = document.getElementById("error7");

    if(!this.registrationService.validateInputName(user)){
      error1!.textContent='*Field can not be empty!'
      error1!.style.color='red'; 
      error1!.style.fontSize="12px";
      this.isName = false;
    }
    else{
      error1!.textContent='';
      this.isName = true;
    }
    if(!this.registrationService.validateInputSurname(user)){
      error2!.textContent='*Field can not be empty!'
      error2!.style.color='red'; 
      error2!.style.fontSize="12px";
      this.isSurname = false;
    }
    else{
      error2!.textContent='';
      this.isSurname = true;
    }
    if(!this.registrationService.validateInputAddress(user)){
      error3!.textContent='*Field can not be empty!'
      error3!.style.color='red'; 
      error3!.style.fontSize="12px",
      this.isAddress = false;
    }
    else{
      error3!.textContent='';
      this.isAddress = true;
    }
    if(!this.registrationService.validateInputPhone(user)){
      error4!.textContent='*Field can not be empty!'
      error4!.style.color='red'; 
      error4!.style.fontSize="12px";
      this.isPhone = false;
    }
    else if (!this.registrationService.validatePhone(user.phone)){ 
      error4!.textContent='Input must be a number'
      error4!.style.color='red'; 
      error4!.style.fontSize="12px"
    }
    else{
      this.isPhone = true;
      error4!.textContent='';
    }
    if(!this.registrationService.validateInputRole(user)){
      error5!.textContent='*Field can not be empty!'
      error5!.style.color='red'; 
      error5!.style.fontSize="12px"
    }
    else{
      error5!.textContent='';
    }
    if(!this.registrationService.validateRole(user)){
      error5!.textContent='';
      error5!.textContent='*Role must be Professor or Student'
      error5!.style.color='red'; 
      error5!.style.fontSize="12px";
      this.isRole = false;
    }
    else{
      this.isRole = true;
      error5!.textContent='';
    }
    if(!this.registrationService.validateInputEmail(user)){
      error6!.textContent='*Field can not be empty!'
      error6!.style.color='red'; 
      error6!.style.fontSize="12px"
      this.isEmail = false;  
    }
    else{
      error6!.textContent='';
      this.isEmail = true;
    }
    if(!this.loginService.validateEmail(user.email)){
      error6!.textContent='';
      error6!.textContent='*Your email is invalid'
      error6!.style.color='red';
      error6!.style.fontSize="12px";  
      this.isEmail = false;
    }
    else{
      error6!.textContent='';
      this.isEmail = true;
    }
    if(this.isEmail) {
      this.forgotpassService.authenticateMail(user).subscribe((data: any) => {
        if(data.success){
          error6!.textContent='';
          error6!.textContent='Email is already in use.'
          error6!.style.color='red';
          error6!.style.fontSize="12px"
          this.isTakenEmail = true;
        }
        else{
          this.isTakenEmail = false;
        }
      });
    }
    if(!this.registrationService.validateInputPassword(user)){
      error7!.textContent='*Field can not be empty!'
      error7!.style.color='red';
      error7!.style.fontSize="12px";
    }
    else{
      error7!.textContent='';      
    }
    if(!this.registrationService.validatePasswordLength(user)){
      error7!.textContent=''; 
      error7!.textContent='*Password must be at least 6 characters long'
      error7!.style.color='red';
      error7!.style.fontSize="12px";
      this.isPassword = false;
    }
    else{
      this.isPassword = true;
      error7!.textContent='';       
      
      if(this.isName && this.isSurname && this.isAddress && this.isPhone && this.isRole && this.isPassword && this.isEmail && this.isTakenEmail == false){
        this.registrationService.registerUser(user).subscribe((data: any) => {
          if(data.success){
            error7!.textContent='';
            error7!.textContent='User is successfuly registered'
            error7!.style.color='green'; 
            error7!.style.fontSize='15px';               
          }
        });
      }    
    }
  }
}