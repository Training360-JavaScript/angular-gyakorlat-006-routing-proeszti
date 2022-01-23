import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from "../model/event";
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private data: Event[] = [
    {
      date: "2021-12-12",
      location: {
        address: "Búza street 13",
        city: "Szeged",
        country: "Hungary"
      },
      name: "Soccer",
      time: "12:30"
    },
    {
      date: "2021-03-13",
      location: {
        address: "Julia street 9",
        city: "Szeged",
        country: "Hungary"
      },
      name: "Mirmur",
      time: "09:15"
    },
    {
      date: "2021-11-22",
      location: {
        address: "Árpa street 78",
        city: "Szeged",
        country: "Hungary"
      },
      name: "Pindúr",
      time: "10:45"
    },
  ];

  constructor() { }

  getAll(): Observable<Event[]> {
    return of(this.data);
  }

}


