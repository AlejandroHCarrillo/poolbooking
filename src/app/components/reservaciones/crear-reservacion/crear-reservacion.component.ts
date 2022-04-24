import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-reservacion',
  templateUrl: './crear-reservacion.component.html',
  styleUrls: ['./crear-reservacion.component.css']
})
export class CrearReservacionComponent implements OnInit {
  fecha : string = "24/04/2022";
  hora: string = "10:00";
  numCasa: string = "120";
  creditos: number = 25;
  numPersonas: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
