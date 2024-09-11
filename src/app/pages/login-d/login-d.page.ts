import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login-d',
  templateUrl: './login-d.page.html',
  styleUrls: ['./login-d.page.scss'],
})
export class LoginDPage implements OnInit {

  constructor(private alertController: AlertController,
    private navCtrl: NavController) { }

  nombre:string=''
  password:string=''

  ngOnInit() {
  }
  validar(){
    if (this.nombre=="profesor" && this.password=="profesor1") {
      console.log("Bienvenido")
      localStorage.setItem("usuario",this.nombre)
      this.navCtrl.navigateForward(['/docente'])
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

}
