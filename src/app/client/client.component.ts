import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CreateClientDialogComponent } from '../create-client-dialog/create-client-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditClientDialogComponent } from '../edit-client-dialog/edit-client-dialog.component';
import { DeleteClientDialogComponent } from '../delete-client-dialog/delete-client-dialog.component';

export interface ClientElement {
  name: string;
  phone: string;
  company: string;
  email: string;
}

const CLIENT_DATA: ClientElement[] = [
  {
    name: 'John Doe',
    phone: '123-456-7890',
    company: 'Company A',
    email: 'john@example.com',
  },
  {
    name: 'John Doe',
    phone: '123-456-7890',
    company: 'Company A',
    email: 'john@example.com',
  },
  {
    name: 'John Doe',
    phone: '123-456-7890',
    company: 'Company A',
    email: 'john@example.com',
  },
  {
    name: 'John Doe',
    phone: '123-456-7890',
    company: 'Company A',
    email: 'john@example.com',
  },
  {
    name: 'John Doe',
    phone: '123-456-7890',
    company: 'Company A',
    email: 'john@example.com',
  },
];

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent {
  displayedColumns: string[] = ['name', 'phone', 'company', 'email', 'actions'];
  dataSource = CLIENT_DATA;

  constructor(public dialog: MatDialog) {}

  openAddClientDialog(): void {
    const dialogRef = this.dialog.open(CreateClientDialogComponent, {
      width: '500px',
      data: { name: '', phone: '', company: '', email: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  openEditClientDialog(): void {
    const dialogRef = this.dialog.open(EditClientDialogComponent, {
      width: '500px',
      data: {
        name: 'John Doe',
        phone: '123-456-7890',
        company: 'Company A',
        email: 'john@example.com',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  openDeleteClientDialog(): void {
    const dialogRef = this.dialog.open(DeleteClientDialogComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
