import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface HourElement {
  fecha: string;
  horaAzulManana: string;
  horaDoradaManana: string;
  horaDoradaNoche: string;
  horaAzulNoche: string;
}

const HOUR_DATA: HourElement[] = [
  {
    fecha: '01/03',
    horaAzulManana: '5:00 AM - 6:00 AM',
    horaDoradaManana: '6:00 AM - 7:00 AM',
    horaDoradaNoche: '6:00 PM - 7:00 PM',
    horaAzulNoche: '7:00 PM - 8:00 PM',
  },
  {
    fecha: '02/03',
    horaAzulManana: '5:00 AM - 6:00 AM',
    horaDoradaManana: '6:00 AM - 7:00 AM',
    horaDoradaNoche: '6:00 PM - 7:00 PM',
    horaAzulNoche: '7:00 PM - 8:00 PM',
  },
  {
    fecha: '03/03',
    horaAzulManana: '5:00 AM - 6:00 AM',
    horaDoradaManana: '6:00 AM - 7:00 AM',
    horaDoradaNoche: '6:00 PM - 7:00 PM',
    horaAzulNoche: '7:00 PM - 8:00 PM',
  },
  {
    fecha: '04/03',
    horaAzulManana: '5:00 AM - 6:00 AM',
    horaDoradaManana: '6:00 AM - 7:00 AM',
    horaDoradaNoche: '6:00 PM - 7:00 PM',
    horaAzulNoche: '7:00 PM - 8:00 PM',
  },
  {
    fecha: '05/03',
    horaAzulManana: '5:00 AM - 6:00 AM',
    horaDoradaManana: '6:00 AM - 7:00 AM',
    horaDoradaNoche: '6:00 PM - 7:00 PM',
    horaAzulNoche: '7:00 PM - 8:00 PM',
  },
  {
    fecha: '06/03',
    horaAzulManana: '5:00 AM - 6:00 AM',
    horaDoradaManana: '6:00 AM - 7:00 AM',
    horaDoradaNoche: '6:00 PM - 7:00 PM',
    horaAzulNoche: '7:00 PM - 8:00 PM',
  },
  {
    fecha: '07/03',
    horaAzulManana: '5:00 AM - 6:00 AM',
    horaDoradaManana: '6:00 AM - 7:00 AM',
    horaDoradaNoche: '6:00 PM - 7:00 PM',
    horaAzulNoche: '7:00 PM - 8:00 PM',
  },
];

@Component({
  selector: 'app-hour',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss'],
})
export class HourComponent {
  displayedColumns: string[] = [
    'fecha',
    'horaAzulManana',
    'horaDoradaManana',
    'horaDoradaNoche',
    'horaAzulNoche',
  ];
  dataSource = HOUR_DATA;
}
