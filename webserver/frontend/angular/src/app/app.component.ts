import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  selector: 'app-root',
  template: `
    <h1>{{ message }}</h1>
  `,
  
})


export class AppComponent implements OnInit {
  title = 'las-app';
  message: string = 'hey';

  
  constructor(private http: HttpClient) {}

  

  
  ngOnInit() {
    this.http.get<any>('/api').subscribe((response) => {
      this.message = response.message;
    });
  }
}
