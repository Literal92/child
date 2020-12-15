import { Component } from '@angular/core';
import { MatCalendarCellCssClasses, MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'jalali-moment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child';
  events: any;
  hdate: any;

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.events = moment(event.value, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
    let time = new Date().getTime() - event.value.getTime();
    let Difference_In_Days = time / (1000 * 3600 * 24);
    console.log(Difference_In_Days.toFixed(0));
    this.hdate = this.dayToMonth(time, Difference_In_Days);
  }

  dayToMonth(diff: any,day: any): string {
    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    return days + " روز " + months + " ماه ";
  }
}
