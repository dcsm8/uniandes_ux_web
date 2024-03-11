import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export interface WeatherData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ChartModule, MatCardModule, MatIconModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  weatherToday = {
    date: '7AM, 10 Enero 2024',
    temperature: '20°C',
    status: 'Nublado',
    humidity: 'Humedad: 80%',
    wind: 'Viento: 10 km/h',
  };

  data: any;

  constructor() {
    this.data = {
      labels: [
        '12AM',
        '2AM',
        '4AM',
        '6AM',
        '8AM',
        '10AM',
        '12PM',
        '2PM',
        '4PM',
        '6PM',
        '8PM',
        '10PM',
      ],
      datasets: [
        {
          label: 'Temperatura',
          data: [16, 15, 14, 14, 16, 18, 21, 23, 22, 20, 18, 16],
          fill: false,
          borderColor: '#42A5F5',
        },
      ],
    };
  }
}
