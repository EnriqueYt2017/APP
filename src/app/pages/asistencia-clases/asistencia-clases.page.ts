import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia-clases',
  templateUrl: './asistencia-clases.page.html',
  styleUrls: ['./asistencia-clases.page.scss'],
})

export class AsistenciaClasesPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) {}

  ngOnInit() {

  }

  async marcarPresencia() {
    // Mostrar alerta
    const alert = await this.alertController.create({
      header: 'Asistencia',
      message: 'Se ha completado la asistencia exitosamente.',
      buttons: ['OK']
    });

    await alert.present();

    // Redirigir después de cerrar la alerta
    await alert.onDidDismiss();
    this.navCtrl.navigateForward('/alumno'); // Ajusta la ruta según tu configuración
  }

}
