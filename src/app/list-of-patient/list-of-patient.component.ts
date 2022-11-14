import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-of-patient',
  templateUrl: './list-of-patient.component.html',
  styleUrls: ['./list-of-patient.component.css']
})
export class ListOfPatientComponent implements OnInit {

  users:any;
  searchText:any;
  constructor( private http: HttpClient) { 

  }

  ngOnInit(): void {
    let resp = this.http.get("http://localhost:4000/patients/getPatients/");
    resp.subscribe((data:any) => {
      this.users=data;
      console.log(resp, 'resp');
    });
  }
  key: string = 'name';
  reverse: boolean = false;
  sort(key: string){
  this.key = key;
  this.reverse = !this.reverse;
}
}
