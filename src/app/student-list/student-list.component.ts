import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  users:any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    let resp = this.http.get("http://localhost:4000/users/getStudents/");
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
