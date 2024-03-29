import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'CupidCast';

  users : any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:7011/api/CupidCastUsers').subscribe(data => {
      this.users = data;
      console.log(this.users);
      
       
    });
  }

  // ngOnInit(): void {
  //   this.http.get('https://localhost:7011/api/CupidCastUsers').subscribe({
  //   next: response => this.users = response,
  //   error: error => console.error(error),
  //   complete: () => console.log('Request has been completed')     
  // })
  // }

}
