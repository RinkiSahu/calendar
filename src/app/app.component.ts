import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calendar';
  Events: any[] = [];

  /*------------------------------------------
  --------------------------------------------
  Define calendarOptions
  --------------------------------------------
  --------------------------------------------*/
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
  };

  /*------------------------------------------
  --------------------------------------------
  Define constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) {}

  /*------------------------------------------
  --------------------------------------------
  Define ngOnInit()
  --------------------------------------------
  --------------------------------------------*/
  ngOnInit() {
    this.httpClient
      .get('http://localhost:8001/events.php')
      .subscribe((res: any) => {
        this.Events = res;
        this.calendarOptions.events = this.Events;
      });
  }

  /*------------------------------------------
  --------------------------------------------
  Define handleDateClick()
  --------------------------------------------
  --------------------------------------------*/
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }
}
