import { Component, OnInit } from '@angular/core';

interface IEvent {
  name: string;
  date: string;
  time: string;
  location: {
    address: string;
    city: string;
    country: string;
  }
}

class Event implements IEvent {
  public name: string;
  public date: string;
  public time: string;
  public location: { address: string; city: string; country: string; };

  constructor(event: IEvent) {
    this.name = event.name;
    this.date = event.date;
    this.time = event.time;
    this.location = event.location;
  }

  getAddress(): string {
    return `${this.location.address} - ${this.location.city} - ${this.location.country}`
  }
}

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {

  public Datos: Event;

  constructor() {
    this.Datos = new Event({
      name: 'ngConf 2025',
      date: '03/01/2025',
      time: '8am',
      location: {
        address: '123 Main St.',
        city: 'Salt Lake City, UT',
        country: 'USA'
      }
    });
  }

  ngOnInit(): void {
  }
}
