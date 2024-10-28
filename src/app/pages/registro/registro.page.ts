import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = ''; 
  apellido: string = ''; // Campo para el apellido
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  rol: string = ''; // Cambié de 'Selecciona un rol' a cadena vacía

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async registrar() {
    if (this.password !== this.confirmPassword) {
      this.mostrarAlerta('Error', 'Las contraseñas no coinciden.');
      return;
    }

    if (!this.nombre || !this.apellido) { // Verificación de nombre y apellido
      this.mostrarAlerta('Error', 'Por favor, ingrese su nombre y apellido.');
      return;
    }

    if (!this.rol) {
      this.mostrarAlerta('Error', 'Por favor, seleccione un rol.');
      return;
    }

    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      if (userCredential && userCredential.user) {
        await this.firestore.collection('usuarios').doc(userCredential.user.uid).set({
          email: this.email,
          nombre: this.nombre,
          apellido: this.apellido, // Agregado el apellido
          rol: this.rol,
          fechaCreacion: new Date()
        });

        this.mostrarAlerta('Éxito', 'Tu cuenta ha sido creada exitosamente.');
        this.navCtrl.navigateForward('/login');
      }
    } catch (error: any) {
      this.mostrarAlerta('Error', error.message || 'Hubo un problema al crear la cuenta.');
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