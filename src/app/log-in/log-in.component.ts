import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  user = {
    username: '',
    password: ''
  };

  onSubmit() {
    // Implementa lógica de inicio de sesión aquí usando this.user
    console.log('Usuario:', this.user.username);
    console.log('Contraseña:', this.user.password);
    // Puedes enviar los datos al backend desde aquí
  }
}


