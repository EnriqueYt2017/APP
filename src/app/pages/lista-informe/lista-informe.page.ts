import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClaseService } from '../../services/clase.service';

@Component({
  selector: 'app-lista-informe',
  templateUrl: './lista-informe.page.html',
  styleUrls: ['./lista-informe.page.scss'],
})
export class ListaInformePage implements OnInit {
  cursos = [
    { nombre: 'Introducción a la Programación', codigo: 'INF_0123' },
    { nombre: 'Estructuras de Datos', codigo: 'INF_0456' },
    { nombre: 'Bases de Datos', codigo: 'INF_0789' },
    { nombre: 'Desarrollo Web', codigo: 'INF_0987' }
  ];

  constructor(
    private navCtrl: NavController,
    private claseService: ClaseService
  ) {}

  ngOnInit() {}

  // Método para manejar la selección de un curso
  informe(curso: any) {
    this.claseService.setClaseSeleccionada(curso);
    this.navCtrl.navigateForward(['/qr-d']);
  }
}