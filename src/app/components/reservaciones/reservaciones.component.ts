import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  diasSemana : string[] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  horarios : string[] = ["8:00 am", "10:00 am", "12:00 am", "2:00 pm", "4:00 pm", "6:00 pm", "8:00 pm"];


  constructor() { }

  ngOnInit(): void {
  }

}
