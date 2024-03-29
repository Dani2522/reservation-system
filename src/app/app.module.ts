import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { httpInterceptorProviders } from './helpers/auth.interceptor';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reservation', component: ReservationListComponent },
  { path: 'logIn', component: LogInComponent },
  { path: '**', redirectTo: '/home' } // Redirecciona a home si la ruta no coincide
];

@NgModule({
  declarations:[
  
  ],
  imports: [
    RouterModule.forRoot(routes),
    NavBarComponent,
    LogInComponent],
  exports: [RouterModule],
  providers: [httpInterceptorProviders],
  bootstrap:[]
})
export class AppRoutingModule { }
