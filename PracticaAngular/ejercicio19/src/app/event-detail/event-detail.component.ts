import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';
import { IEvent } from '../ievent';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  public event: IEvent | undefined;
  public reviewed: boolean = false;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService,
              private router: Router) { }

  ngOnInit(): void {
    let eventID = Number(this.route.snapshot.paramMap.get('id'));

    this.event = this.eventsService.getByID(eventID);
  }

  returnToEvents(): void{
    this.router.navigate(['/']);
  }

  setAsReviewed(): void {
    this.reviewed = true;
  }

}
