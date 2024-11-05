import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string = '';  
  password: string = '';  

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private firestore: AngularFirestore, 
    private afAuth: AngularFireAuth, 
    private router: Router
  ) {}

  ngOnInit() {}

  async validar() {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(this.nombre, this.password);

      if (user) {
        const userDoc = await this.firestore.collection('usuarios').doc(user.user?.uid).get().toPromise();

        if (userDoc && userDoc.exists) {
          const userData: any = userDoc.data();
          
          localStorage.setItem('usuario', userData.nombre); 

          if (userData.rol === 'docente') {
            this.navCtrl.navigateForward(['/docente']);
          } else {
            this.navCtrl.navigateForward(['/alumno']);
          }
        } else {
          console.error('El documento del usuario no existe en Firestore.');
          this.presentAlert('Error', 'No se encontró información del usuario.');
        }
      }
    } catch (error) {
      console.error('Error al validar usuario:', error);
      this.presentAlert('Error', 'Usuario o contraseña incorrectos.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: 'Login fallido',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  restablecer() {
    this.router.navigate(['/recupera']);
  }

  registro() {
    this.navCtrl.navigateForward('/registro');
  }
}