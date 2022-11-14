import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPatientService } from '../services/register-patient.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})

export class RegisterPatientComponent implements OnInit {
  registerPatientForm!: FormGroup;
  name!: String;
  surname!: String; 
  address!: String;
  phone!: Number;
  diagnosis! : String;
  isDiabetic!: Boolean;
  studentName!: String;

  constructor(    
    private formBuilder: FormBuilder,
    private registerpatientService: RegisterPatientService,
    private profileService: ProfileService

  
  ) {}

  ngOnInit(): void {
    this.registerPatientForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      address: [''],
      phone: [''],
      diagnosis: [''],
      isDiabetic: [false]
    }) 
  }

registerPatient(): void {
  const patient = {
    name: this.registerPatientForm.value.name,
    surname: this.registerPatientForm.value.surname,      
    address: this.registerPatientForm.value.address,
    phone: this.registerPatientForm.value.phone,
    diagnosis: this.registerPatientForm.value.diagnosis,
    isDiabetic: this.registerPatientForm.value.isDiabetic,
    studentName: this.profileService.name + ' ' + this.profileService.surname
  }

  

    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    var error5 = document.getElementById("error5");
    var error6 = document.getElementById("error6");
  

    if(!this.registerpatientService.validateInputName(patient)){
      error1!.textContent='*Field can not be empty!'
      error1!.style.color='red'; 
      error1!.style.fontSize="12px"  
    }
    else{
      error1!.textContent='';
    }
    if(!this.registerpatientService.validateInputSurname(patient)){
      error2!.textContent='*Field can not be empty!'
      error2!.style.color='red'; 
      error2!.style.fontSize="12px"  
    }
    else{
      error2!.textContent='';
    }
    if(!this.registerpatientService.validateInputAddress(patient)){
      error3!.textContent='*Field can not be empty!'
      error3!.style.color='red'; 
      error3!.style.fontSize="12px"  
    }
    else{
      error3!.textContent='';
    }
    if(!this.registerpatientService.validateInputPhone(patient)){
      error4!.textContent='*Field can not be empty!'
      error4!.style.color='red'; 
      error4!.style.fontSize="12px"  
    }
    else if (!this.registerpatientService.validatePhone(patient.phone)){ 
      error4!.textContent='Input must be a number'
      error4!.style.color='red'; 
      error4!.style.fontSize="12px"
    }
    else{
      error4!.textContent='';
     }
     if(!this.registerpatientService.validateInputDiagnose(patient)){
      error5!.textContent='*Field can not be empty!'
      error5!.style.color='red'; 
      error5!.style.fontSize="12px"  
    }
    else { 
      error5!.textContent=''

      this.registerpatientService.registerPatient(patient).subscribe((data: any) => {
        if(data.success){
          error6!.textContent='';
          error6!.textContent='Patient is successfuly registered'
          error6!.style.color='green'; 
          error6!.style.fontSize='15px';               
        }
      });
         
      
    
       
     
  
     } }
    
     
    }
    
    
  