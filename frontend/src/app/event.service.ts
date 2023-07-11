import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class EventService {

  constructor(private http: HttpClient) { }

  private SERVER_URL: string = 'http://localhost:3000/'


  getEventList() {
    return this.http.get(this.SERVER_URL + 'events')
  }

}
