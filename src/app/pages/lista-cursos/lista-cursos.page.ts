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
    { nombre: 'Introducción a la Programación', codigo: 'INF_0123' },
    { nombre: 'Estructuras de Datos', codigo: 'INF_0456' },
    { nombre: 'Bases de Datos', codigo: 'INF_0789' },
    { nombre: 'Inteligencia Artificial', codigo: 'INF_0987' },
  ];

}
