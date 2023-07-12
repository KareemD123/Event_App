import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event'

@Injectable({
  providedIn: 'root'
})

export class EventService {

  constructor(private http: HttpClient) { }

  private SERVER_URL: string = 'http://localhost:3000/'

  getEventList() {
    return this.http.get(this.SERVER_URL + 'events')
  }

  searchEvent(searchParam: String) {
    return this.http.get(this.SERVER_URL + `search/${searchParam}`)
  }

  createEvent(newEvent: Event) {
    // The newEvent input parameter becomes the body of the POST request 
    return this.http.post(this.SERVER_URL + 'createEvent', newEvent)
  }

}
