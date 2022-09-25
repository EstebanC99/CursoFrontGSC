import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(['/events']);
  }

  newEvent = this.formBuilder.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    location: this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', [Validators.required, Validators.pattern('[A-Z][a-z]*')]],
    }),
  });

  guardar(newEvent: FormGroup): void {
    this.eventService.saveEvent(newEvent.value);
    this.router.navigate(['events']);
  }

  get country() {
    return this.newEvent.get('location')?.get('country')!;
  }
}
