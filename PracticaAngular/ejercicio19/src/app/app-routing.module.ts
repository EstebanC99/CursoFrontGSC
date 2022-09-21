import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsListComponent } from './events-list/events-list.component';
import { InvalidEventGuardGuard } from './invalid-event-guard.guard';

const routes: Routes = [
  { path: 'event', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailComponent, canActivate: [InvalidEventGuardGuard], 
    canDeactivate: [InvalidEventGuardGuard] },
  { path: '', redirectTo: '/event', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
