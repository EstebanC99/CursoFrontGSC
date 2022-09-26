import { IEvent } from './ievent';

export class Location {
  public city: string = '';
  public address: string = '';
  public country: string = '';
  constructor() {}
}

export class Event implements IEvent {
  public name: string = '';
  public date: string = '';
  public time: string = '';
  public location: Location = new Location();
  public id?: number;
  constructor() {}
}
