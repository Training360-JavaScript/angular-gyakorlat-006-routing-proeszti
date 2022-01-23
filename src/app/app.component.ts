import { Observable } from 'rxjs';
import { EventService } from 'src/app/service/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ang-basic-practice006-routing';

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }


}
