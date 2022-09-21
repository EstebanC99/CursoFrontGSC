import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class InvalidEventGuardGuard implements CanActivate, CanDeactivate<EventDetailComponent> {

  constructor(private eventService: EventsService) { }

  canDeactivate(component: EventDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot): boolean {
      return component.reviewed;
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let eventID = Number(route.paramMap.get('id'));
    return this.eventService.getByID(eventID) ? true : false;
  }

}
