import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  name: string = '';
  surname: string = '';

  constructor(private http: HttpClient) {}

  addPerson() {
    const person = { name: this.name, surname: this.surname };
    this.http.post<any>('/api/person', person).subscribe((response) => {
      console.log(response); // Display the response in the browser console
      // Process the response as needed
    });
  }
}
