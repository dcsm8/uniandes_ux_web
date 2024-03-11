import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HourComponent } from './hour/hour.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: { title: 'Calendario' },
  },
  {
    path: 'hour',
    component: HourComponent,
    data: { title: 'Hora Dorada/Azul' },
  },
  { path: 'weather', component: WeatherComponent, data: { title: 'Clima' } },
];
