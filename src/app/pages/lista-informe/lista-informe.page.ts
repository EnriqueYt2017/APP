import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClaseService } from '../../services/clase.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-lista-informe',
  templateUrl: './lista-informe.page.html',
  styleUrls: ['./lista-informe.page.scss'],
})
export class ListaInformePage implements OnInit {
  cursos: any[] = []; // Almacena los cursos obtenidos de Firebase

  constructor(
    private navCtrl: NavController,
    private claseService: ClaseService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    // Cargar las clases desde Firestore
    this.firebaseService.obtenerClases().subscribe(clases => {
      this.cursos = clases; // Asignar las clases a la variable de cursos
    });
    
    // Agregar clases solo si no están inicializadas
    this.firebaseService.agregarClases();
  }

  // Método para manejar la selección de un curso
  informe(curso: any) {
    this.claseService.setClaseSeleccionada(curso);
    this.navCtrl.navigateForward(['/qr-d']);
  }
}