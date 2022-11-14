import { Component, OnInit } from '@angular/core';
import { ForgotPassService } from 'src/app/services/forgotpass-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  ForgotPassForm!: FormGroup;
  email!: String;
  constructor(private forgotpassService: ForgotPassService, 
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ForgotPassForm = this.formBuilder.group({
      email: ['']
    }) 
  }

  checkEmail(): void {
    const user = {
      email: this.ForgotPassForm.value.email,      
    }
    
    var error1 = document.getElementById("error-email");

    if(!this.forgotpassService.validateInputEmail(user)){
      error1!.textContent='*Field can not be empty!'
      error1!.style.color='red'; 
      error1!.style.fontSize="12px"  
    }
    else{
      error1!.textContent='';
        
      if(!this.forgotpassService.validateEmail(user.email)){
        error1!.textContent='*Your email is invalid'
        error1!.style.color='red';  
      }
      else{
        error1!.textContent=''
           
        this.forgotpassService.authenticateMail(user).subscribe((data: any) => {
          if(data.success == true){
            console.log('Data success')
            error1!.textContent='*Your new password request is successfully sent'
            error1!.style.color='green';
            error1!.style.fontSize="12px" 
          } 
          if (data.success == false){
           console.log('error');
            
            error1!.textContent='*Your email is incorrect'
            error1!.style.color='red';
            error1!.style.fontSize="12px" 
          }
        });    
      } 
    }
  }
}

