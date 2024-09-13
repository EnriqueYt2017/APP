import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-informe',
  templateUrl: './lista-informe.page.html',
  styleUrls: ['./lista-informe.page.scss'],
})
export class ListaInformePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  informe() {
    this.navCtrl.navigateForward(['/qr-d'])
  }


  cursos = [
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' }
  ];


}
