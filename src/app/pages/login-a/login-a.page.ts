import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login-a',
  templateUrl: './login-a.page.html',
  styleUrls: ['./login-a.page.scss'],
})
export class LoginAPage implements OnInit {

  constructor(private alertController: AlertController,
    private navCtrl: NavController) { }

  nombre:string='alumno'
  password:string='alumno'

  ngOnInit() {
    console.log('Componente inicializado');
  }

  validar(){
    if (this.nombre=="alumno" && this.password=="alumno2") {
      console.log("Bienvenido")
      localStorage.setItem("usuario",this.nombre)
      this.navCtrl.navigateForward(['/alumno'])
    } else {
      console.log("usuario/password incorrecto")
      this.presentAlert()
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login',
      subHeader: 'Acceso al sistema agenda',
      message: 'Usuario o password incorrecto',
      buttons: ['OK'],
    });

    await alert.present();
  }

  restablece() {
    this.navCtrl.navigateForward(['/intro'])
  }

}
