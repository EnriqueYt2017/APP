import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cursos = [
    { nombre: 'Introducción a la Programación', porcentaje: '85%' },
    { nombre: 'Estructuras de Datos', porcentaje: '90%' },
    { nombre: 'Bases de Datos', porcentaje: '78%' },
    { nombre: 'Inteligencia Artificial', porcentaje: '88%' },
  ];

}
