import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ProfileService } from 'src/app/services/profile.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  LoginForm!: FormGroup;
  email!: String;
  password!: String; 
  public showPassword!: boolean;
  isPassword!: boolean;
  isEmail!:boolean;
  
  constructor(private loginService: LoginService, 
              private formBuilder: FormBuilder,
              private router: Router,
              private profileService: ProfileService) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email: [''],
      password: [''],
      checkbox: [false, Validators.requiredTrue]
    }) 
  }

  checkUser(): void {
    const user = {
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password,      
    }

    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    
    if(!this.loginService.validateInputPassword(user)){
      error2!.textContent='*Field can not be empty!'
      error2!.style.color='red';
      error2!.style.fontSize="12px"
      this.isPassword=false;
   
    }
    else {
      error2!.textContent='';   
      this.isPassword=true;   
    }

    if(!this.loginService.validateInputEmail(user)){
      error1!.textContent='*Field can not be empty!'
      error1!.style.color='red'; 
      error1!.style.fontSize="12px"  
      this.isEmail=false;
    }
  
    else if(!this.loginService.validateEmail(user.email)){
      error1!.textContent='*Your email is invalid'
      error1!.style.color='red';  
    }
    else {
      error1!.textContent='' 
      
         
      this.loginService.authenticateUser(user).subscribe((data: any) => { 
        if(!data.success && this.isPassword==true){
          this.router.navigate(['homepage'])
          error2!.textContent='*Your email or password may be incorrect'
          error2!.style.color='red'; 
          error2!.style.fontSize='12px';
          this.loginService.setAuth(false);    

        }
        this.profileService.setEmail(data.user.email);
        this.profileService.setName(data.user.name);
        this.profileService.setSurname(data.user.surname);
        this.profileService.setAddress(data.user.address);
        this.profileService.setPhone(data.user.phone);
        this.profileService.setRole(data.user.role);
      if(data.success && this.profileService.role == 'Admin'){
        this.loginService.setAuth(true);
        this.router.navigate(['admin-dashboard'])                      
      }
      else if(data.success && this.profileService.role == 'Student'){
        this.loginService.setAuth(true);
        this.router.navigate(['student-dashboard'])                      
      }
      else if(data.success && this.profileService.role == 'Professor'){
        this.loginService.setAuth(true);
        this.router.navigate(['professor-dashboard'])                      
      }
      
    
  
      });
    }
  }
  }

         
    
  
  



