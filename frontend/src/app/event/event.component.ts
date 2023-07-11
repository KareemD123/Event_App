import { Component, OnInit } from '@angular/core';
// Import Service
import { EventService } from '../event.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private _eventService: EventService) { }
  // Initialize local variable/state
  eventList: any = []

  ngOnInit(): void {
    this.getEventList()
  }

  //Call getEventList

  getEventList() {
    this._eventService.getEventList().subscribe(responseData => {
      // Store data locally
      this.eventList = responseData
      console.log("This is the API data: ", responseData)
    })
  }


}
