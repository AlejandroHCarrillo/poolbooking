import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PagesComponent } from './components/pages/pages.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrearReservacionComponent } from './components/reservaciones/crear-reservacion/crear-reservacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservacionesComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    PagesComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CrearReservacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
