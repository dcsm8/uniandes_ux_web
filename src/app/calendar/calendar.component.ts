import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [
      { title: 'Sesión cliente 1', date: '2024-03-01' },
      { title: 'Sesión cliente 2', date: '2024-03-05' },
      { title: 'Sesión cliente 3', date: '2024-03-06' },
      { title: 'Sesión cliente 4', date: '2024-03-06' },
    ],
    locale: esLocale,
  };
}
