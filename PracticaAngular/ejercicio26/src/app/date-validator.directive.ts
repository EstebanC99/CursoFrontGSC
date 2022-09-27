import { Directive, OnInit } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

enum FechasBloqueadas {
  Domingo = 0,
  Sabado = 6,
}

@Directive({
  selector: '[appDateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator, OnInit {
  ngOnInit() {}

  validate(control: FormControl): ValidationErrors | null {
    let fecha: Date = new Date(control.value);

    if (
      fecha.getDay() === FechasBloqueadas.Sabado ||
      fecha.getDay() === FechasBloqueadas.Domingo
    ) {
      return { invalidDate: true, message: 'No puede ser Sabado ni Domingo!' };
    }

    if (fecha.toString() === 'Invalid Date') {
      return { invalidDate: true, message: 'Fecha invalida!' };
    }

    return null;
  }

  constructor() {}
}
