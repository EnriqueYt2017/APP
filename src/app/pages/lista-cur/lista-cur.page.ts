import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-cur',
  templateUrl: './lista-cur.page.html',
  styleUrls: ['./lista-cur.page.scss'],
})
export class ListaCurPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  cursolista() {
    this.navCtrl.navigateForward(['/cursos-d'])
  }


  cursos = [
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' },
    { nombre: 'Curso 1', idioma: 'Inglés', codigo: 'INIT_0123' }
  ];

}
