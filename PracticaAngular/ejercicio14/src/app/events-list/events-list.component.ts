import { Component, OnInit } from '@angular/core';

interface IEvent {
  format?: string;
}

enum EventFormat {
  InPerson = 'InPerson',
  Online = 'Online'
}

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: [ './events-list.component.css' ]
})
export class EventsListComponent implements OnInit {

  events = [
    {
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10am',
      location: {
        address: '1 London Road ',
        city: 'London',
        country: 'England'
      },
      format: "InPerson"
    },
    {
      name: 'ng-conf 2037',
      date: '4/15/2037',
      time: '9am',
      onlineUrl: 'https://www.ng-conf.org/',
      format: "Online"
    },
    {
      name: 'Future Conf (Location/Url a determinar)',
      date: '6/10/2037',
      time: '8am'
    },
    {
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8am',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      },
      format: "InPerson"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  getTitleStyle(event: IEvent): Object{

    switch (event.format) {
      case EventFormat.InPerson:
        return {'color': 'green'};
      case EventFormat.Online:
        return {'color': 'red'};
      default:
        return {'color': '#aaa'};
    }
  }
}
