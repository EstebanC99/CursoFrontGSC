import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { IEvent } from '../ievent';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  public events: IEvent[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getAll();
  }

}
