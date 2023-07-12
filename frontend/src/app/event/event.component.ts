import { Component, OnInit } from '@angular/core';
// Import Service
import { EventService } from '../event.service'
import { Event } from '../event'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private _eventService: EventService) { }
  // Initialize local variable/state
  eventList: any = []

  searchParam: String = ''

  event: Event = {
    name: '',
    host: '',
    date: new Date(),
    location: ''
  }

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

  searchEvent() {
    this._eventService.searchEvent(this.searchParam).subscribe(responseData => {
      console.log('This is the search response data: ', responseData)

      if (responseData) {
        this.eventList = responseData
      } else {
        console.log('There was an error !')
      }

    })
  }


  createEvent() {
    console.log("This is the event form data: ", this.event)
    this._eventService.createEvent(this.event).subscribe(responseData => {
      console.log('This is the response data: ', responseData)
      this.getEventList()
    })
  }

}
