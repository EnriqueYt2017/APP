import { Component, OnInit } from '@angular/core';
import { ClaseService } from '../../services/clase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia-clases',
  templateUrl: './asistencia-clases.page.html',
  styleUrls: ['./asistencia-clases.page.scss'],
})
export class AsistenciaClasesPage implements OnInit {
  claseSeleccionada: string = '';
  profesor: string = '';
  hora: string = '';

  constructor(
    private claseService: ClaseService,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.claseService.getClaseSeleccionada().subscribe((clase: any) => {
      if (clase) {
        this.claseSeleccionada = clase.nombre;
        this.cargarDatosClase(clase);
      }
    });
  }

  cargarDatosClase(clase: any) {
    switch (clase.nombre) {
      case 'Introducción a la Programación':
        this.profesor = 'Ana García';
        this.hora = '08:00 AM';
        break;
      case 'Estructuras de Datos':
        this.profesor = 'Carlos Hernández';
        this.hora = '10:00 AM';
        break;
      case 'Bases de Datos':
        this.profesor = 'Laura Díaz';
        this.hora = '12:00 PM';
        break;
      case 'Desarrollo Web':
        this.profesor = 'Juan Martínez';
        this.hora = '02:00 PM';
        break;
    }
  }

  async marcarPresente() {
    const user = await this.afAuth.currentUser;
    if (user) {
      try {
        await this.firestore.collection('asistencias').add({
          userId: user.uid,
          clase: this.claseSeleccionada,
          fecha: new Date(),
        });
        this.mostrarAlerta('Asistencia registrada', 'Se ha registrado tu asistencia.');
        this.navCtrl.navigateForward(['/curso-d']);
      } catch (error) {
        console.error(error);
        this.mostrarAlerta('Error', 'No se pudo registrar la asistencia.');
      }
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}