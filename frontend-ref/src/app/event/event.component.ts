import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventList: any = []

  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    // LifeCycle Method On Component Initialization
    this.getEventList()
  }

  // getEventList
  getEventList() {
    this._eventService.getEventList().subscribe(responseData => {
      this.eventList = responseData
      console.log('Response from Express API:', responseData)
    })
  }


}
