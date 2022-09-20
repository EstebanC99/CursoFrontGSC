import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { IEvent } from '../ievent';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  public event: IEvent | undefined;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService) { }

  ngOnInit(): void {
    let eventID = Number(this.route.snapshot.paramMap.get('id'));

    this.event = this.eventsService.getByID(eventID);
  }

}
