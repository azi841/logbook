import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  users:any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    let resp = this.http.get("http://localhost:4000/users/getProfessors/");
    resp.subscribe((data:any) => {
      this.users=data;
    });
  }
  key: string = 'name';
  reverse: boolean = false;
 sort(key: string){
  this.key = key;
  this.reverse = !this.reverse;
}
}
