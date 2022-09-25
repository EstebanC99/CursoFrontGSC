import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(['/events']);
  }

  newEvent = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    location: new FormGroup({
      address: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
    }),
  });

  guardar(newEvent: FormGroup): void{
    this.eventService.saveEvent(newEvent.value);
    this.router.navigate(['events']);
  }
}
