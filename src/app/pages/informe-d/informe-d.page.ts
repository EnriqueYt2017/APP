import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe-d',
  templateUrl: './informe-d.page.html',
  styleUrls: ['./informe-d.page.scss'],
})
export class InformeDPage implements OnInit {

  estudiantes = [
    { nombre: 'Juan Carlos Martínez', asistencia: '55%' },
    { nombre: 'María Fernanda González', asistencia: '62%' },
    { nombre: 'Carlos Eduardo Sánchez', asistencia: '48%' },
    { nombre: 'Ana Sofía Ramírez', asistencia: '65%' },
    { nombre: 'Luis Alberto Torres', asistencia: '59%' },
    { nombre: 'Gabriela Isabel López', asistencia: '50%' },
    { nombre: 'Fernando Alejandro Pérez', asistencia: '61%' },
    { nombre: 'Santiago Valdés', asistencia: '58%' },
    { nombre: 'Camila Herrera', asistencia: '49%' },
    { nombre: 'Ricardo Vargas', asistencia: '63%' },
    { nombre: 'Paula Medina', asistencia: '57%' },
    { nombre: 'Jorge Rojas', asistencia: '52%' },
    { nombre: 'Valentina Morales', asistencia: '60%' },
    { nombre: 'Andrés Navarro', asistencia: '47%' },
    { nombre: 'Mónica Fernández', asistencia: '65%' },
    { nombre: 'Sebastián Castro', asistencia: '64%' },
    { nombre: 'Claudia Salinas', asistencia: '55%' },
    { nombre: 'Daniel Pizarro', asistencia: '61%' }
  ];

  

  constructor() { }

  ngOnInit() {
  }
  eliminarEstudiante(indice: number) {
    this.estudiantes.splice(indice, 1);
  }
}
