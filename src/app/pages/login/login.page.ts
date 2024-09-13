import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string = '';
  password: string = '';

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {}

  validar() {
    if (this.nombre === 'Juan' && this.password === 'alumno1') {
      localStorage.setItem('usuario', this.nombre); // Guardar el nombre en localStorage
      this.navCtrl.navigateForward(['/alumno']);  // Navegar a la página del alumno
    } else if (this.nombre === 'Freddy' && this.password === 'profesor1') {
      localStorage.setItem('usuario', this.nombre); // Guardar el nombre en localStorage
      this.navCtrl.navigateForward(['/docente']);  // Navegar a la página del docente
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login',
      subHeader: 'Acceso al sistema agenda',
      message: 'Usuario o contraseña incorrecto',
      buttons: ['OK'],
    });
    await alert.present();
  }

  restablecer() {
    this.navCtrl.navigateForward(['/recupera']);
  }
}