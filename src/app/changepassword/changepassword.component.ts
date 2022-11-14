import { Component, OnInit } from '@angular/core';
import { ChangepassService } from 'src/app/services/changepass.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
 
  ChangePassForm!: FormGroup;
  password!: String;
  repassword!:String;
  token!: string | null;
  public showPassword!: boolean;
  public showConPassword!: boolean;
  constructor(private changepassService: ChangepassService, 
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute
  ) {}

  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.token = params.get('token')
    })
    this.ChangePassForm = this.formBuilder.group({
      password: [''],
      repassword: [''],
    }) 
  }

  checkInput(): void {
    const user = {
      password: this.ChangePassForm.value.password, 
      repassword: this.ChangePassForm.value.repassword,     
    }

    var error1 = document.getElementById("error-password");
    var error2 = document.getElementById("error-repassword");
    var error3 = document.getElementById("password-match");


    if(!this.changepassService.validateInputPassword(user)){
      error1!.textContent='*Field can not be empty!'
      error1!.style.color='red';
      error1!.style.fontSize="12px"
   
    }
    else {
      error1!.textContent='';      
    }

    if(!this.changepassService.validateInputRePassword(user)){
      error2!.textContent='*Field can not be empty!'
      error2!.style.color='red';
      error2!.style.fontSize="12px"
   
    }
    else {
      error2!.textContent='';      
      try {
        if (this.ChangePassForm.value.password.length > 5){
          if (this.ChangePassForm.value.password == this.ChangePassForm.value.repassword){
            if (this.token) {
              this.changepassService.resetPassword(this.token, this.ChangePassForm.value.repassword).subscribe(()=>{
                console.log('password changed')
              })
              this.router.navigate(['homepage'])
            }
          }
          else{
            error3!.textContent='Password does not match'
            error3!.style.color='red';
            error3!.style.fontSize="12px"
          }
        }
        if (this.ChangePassForm.value.password.length < 6){
          error3!.textContent='Password must be at least 6 characters!'
          error3!.style.color='red';
          error3!.style.fontSize='12px'
        }
      } 
      catch (error) {
        console.log(error);
      }
    }
  } 
}
    