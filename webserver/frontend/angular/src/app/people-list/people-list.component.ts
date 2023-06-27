import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPeople(); // Initial fetching of people list
    setInterval(() => {
      this.getPeople(); // Periodically fetch updated people list every few seconds
    }, 2000); // Adjust the interval duration as needed
  }

  getPeople() {
    this.http.get<any[]>('/api/people').subscribe((response) => {
      this.people = response;
    });
  }

  deletePerson(id: string) {
    this.http.delete(`/api/people/${id}`).subscribe(() => {
      this.getPeople(); // Fetch updated people list after successful deletion
    });
  }
}
