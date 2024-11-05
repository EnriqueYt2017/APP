import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.page.html',
  styleUrls: ['./recupera.page.scss'],
})
export class RecuperaPage implements OnInit {

  email: string = '';

  constructor(
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private alertController: AlertController
  ) { }

  ngOnInit() {}


  async enviarCorreoDeRecuperacion() {
    if (!this.email) {
      this.mostrarAlerta('Error', 'Por favor ingresa un correo válido.');
      return;
    }

    try {
      await this.afAuth.sendPasswordResetEmail(this.email); 
      this.mostrarAlerta('Éxito', 'Se ha enviado un correo de recuperación. Por favor revisa tu bandeja.');
      this.navCtrl.navigateForward(['/login']); 
    } catch (error) {
      this.mostrarAlerta('Error', 'Hubo un problema al enviar el correo. Inténtalo nuevamente.');
    }
  }


  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}