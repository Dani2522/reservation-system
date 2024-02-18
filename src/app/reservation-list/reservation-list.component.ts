import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent {
  reservation = {
    date: '',
    clientName: '',
    status: ''
  };

  onSubmit() {
    // Implementa lógica de creación de reserva aquí usando this.reservation
    console.log('Fecha:', this.reservation.date);
    console.log('Nombre del Cliente:', this.reservation.clientName);
    console.log('Estado de la Reserva:', this.reservation.status);
    // Puedes enviar los datos al backend desde aquí
  }

}
