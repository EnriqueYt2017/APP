import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cursos-d',
  templateUrl: './cursos-d.page.html',
  styleUrls: ['./cursos-d.page.scss'],
})
export class CursosDPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  estudiantes = [
    { nombre: 'Alejandro Vega', asistencia: true },
    { nombre: 'Ana Rojas', asistencia: true },
    { nombre: 'Camila Sánchez', asistencia: false },
    { nombre: 'Carolina Mendoza', asistencia: false },
    { nombre: 'Daniela Ortiz', asistencia: true },
    { nombre: 'Diego Morales', asistencia: true },
    { nombre: 'Emilio Castro', asistencia: false },
    { nombre: 'Sebastián López', asistencia: false },
    { nombre: 'Sofía González', asistencia: true },
    { nombre: 'Francisco Lobos', asistencia: false }
  ];

  enviarAsistencia() {
    console.log(this.estudiantes);
}
  enviar() {
    this.navCtrl.navigateForward(['/docente']) 
  }
}
