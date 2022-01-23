import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from "../../model/event";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  constructor(private eventService: EventService) { }

  eventList: Event[] = [];

  ngOnInit(): void {

    this.eventService.getAll()
      .subscribe((data: Event[]) => {
        this.eventList = data;
      });
  }

}
