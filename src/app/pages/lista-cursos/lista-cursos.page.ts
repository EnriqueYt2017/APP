import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.page.html',
  styleUrls: ['./lista-cursos.page.scss'],
})
export class ListaCursosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  generar() {
    this.navCtrl.navigateForward(['/informe-d'])
  }


  cursos = [
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' }
  ];

}
