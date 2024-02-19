import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
  isLoggedin = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    const {username, password} = this.user;

    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data)
      }
    })
  }
}


