import { Component, OnInit } from '@angular/core';
import { ClaseService } from '../../services/clase.service';
import { FirebaseService } from '../../services/firebase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-cur',
  templateUrl: './lista-cur.page.html',
  styleUrls: ['./lista-cur.page.scss'],
})
export class ListaCurPage implements OnInit {
  cursos: any[] = []; // Almacena los cursos obtenidos de Firebase

  constructor(
    private claseService: ClaseService,
    private firebaseService: FirebaseService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Cargar las clases desde Firestore
    this.firebaseService.obtenerClases().subscribe(clases => {
      this.cursos = clases; // Asignar las clases a la variable de cursos
    });

    // Agregar clases solo si no están inicializadas
    this.firebaseService.agregarClases();
  }

  cursolista(curso: any) {
    this.claseService.setClaseSeleccionada(curso);
    this.navCtrl.navigateForward([`/cursos-d/${curso.id}`]);
  }
}