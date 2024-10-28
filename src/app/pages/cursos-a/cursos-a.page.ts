import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-a',
  templateUrl: './cursos-a.page.html',
  styleUrls: ['./cursos-a.page.scss'],
})
export class CursosAPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cursos = [
    { nombre: 'Introducción a la Programación', codigo: 'INF_0123' },
    { nombre: 'Estructuras de Datos', codigo: 'INF_0456' },
    { nombre: 'Bases de Datos', codigo: 'INF_0789' },
    { nombre: 'Inteligencia Artificial', codigo: 'INF_0987' },
  ];

}
