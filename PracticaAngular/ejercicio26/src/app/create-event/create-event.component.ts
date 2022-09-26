import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event, Location } from '../event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  public model = new Event();

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(['/events']);
  }

  save(){
    this.eventService.saveEvent(this.model);
    this.router.navigate(['/events']);
  }
}
