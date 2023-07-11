import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private SERVER_URL: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getEventList() {
    // GET /events to API
    return this.http.get(this.SERVER_URL + 'events')
  }

}
