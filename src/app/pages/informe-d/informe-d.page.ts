import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe-d',
  templateUrl: './informe-d.page.html',
  styleUrls: ['./informe-d.page.scss'],
})
export class InformeDPage implements OnInit {

  estudiantes = [
    { nombre: 'Juan Agustín Lara Bosque', asistencia: '60%' },
    { nombre: 'Ricardo Manuel Ortiz Jiménez', asistencia: '60%' },
    { nombre: 'Laura Patricia Castillo Vargas', asistencia: '60%' },
    { nombre: 'Pedro Javier Hernández Ruiz', asistencia: '65%' },
    { nombre: 'Carmen Teresa Díaz Morales', asistencia: '60%' },
    { nombre: 'Luis Miguel Ramírez Torres', asistencia: '60%' },
    { nombre: 'Ana Isabel Gómez Fernández', asistencia: '60%' },
    { nombre: 'Francisco González', asistencia: '60%' },
    { nombre: 'María Fernanda López García', asistencia: '60%' },
    { nombre: 'Pedro Andrés López Pérez', asistencia: '60%' }
  ];

  

  constructor() { }

  ngOnInit() {
  }
  eliminarEstudiante(indice: number) {
    this.estudiantes.splice(indice, 1);
  }
}
