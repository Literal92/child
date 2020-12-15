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
  edate: any;

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.events = moment(event.value, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
    let diff = Math.floor(new Date().getTime() - event.value.getTime());
    let day = diff / (1000 * 3600 * 24);
    this.hdate = this.dayToMonth(day);
    let minus9month = new Date(event.value.setMonth(event.value.getMonth() + 9));
    this.edate = moment(minus9month, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  }

  dayToMonth(day: any): string {
    var months = Math.floor(day / 31);
    var days =  Math.floor(day - months * 31);
    if(months > 0 && months <= 9)
      return days + " روز " + months + " ماه ";
    else if(months == 0)
      return days + " روز "
    else if(months > 9 || months < 0)
      return "تاریخ با دقت انتخاب کنید"
  }
}
