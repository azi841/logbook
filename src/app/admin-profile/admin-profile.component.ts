import { Component, OnInit } from '@angular/core';

import { ProfileService } from 'src/app/services/profile.service'


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
  
})
export class AdminProfileComponent implements OnInit {
  email!: any;
  password!: any; 
  name!: any;
  surname!: any;
  address!: any;
  phone!: any;
  role!: any;

  constructor(private profileService: ProfileService) {

  }
  

  ngOnInit(): void {

  this.profileService.displayData();

    
    var logbook_user = document.getElementById("Logbook user");
    logbook_user!.textContent = this.profileService.name + ' ' + this.profileService.surname;
    logbook_user!.style.fontSize= '24px';
    
     var role = document.getElementById("Role");
     role!.textContent = this.profileService.role;
     role!.style.fontSize= '24px';


    
    var profile_name_surname = document.getElementById("Name and Surname");
    profile_name_surname!.textContent = this.profileService.name + ' ' + this.profileService.surname;
    profile_name_surname!.style.color='blue'

    var profile_phone = document.getElementById("Phone number");
    profile_phone!.textContent = this.profileService.phone;
    profile_phone!.style.color= 'blue'

    var profile_address = document.getElementById("Address");
    profile_address!.textContent = this.profileService.address;
    profile_address!.style.color = 'blue'

    var profile_email = document.getElementById("Email address");
    profile_email!.textContent = this.profileService.email;
    profile_email!.style.color = 'blue'
    
  }

  


  
  
  

}

