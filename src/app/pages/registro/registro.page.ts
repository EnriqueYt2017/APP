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
  apellido: string = ''; 
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  rol: string = ''; 

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

    if (!this.nombre || !this.apellido) {
      this.mostrarAlerta('Error', 'Por favor, ingrese su nombre y apellido.');
      return;
    }

    if (!this.email || !this.email.includes('@')) {
      this.mostrarAlerta('Error', 'Por favor, ingrese un correo válido.');
      return;
    }

    if (!this.rol) {
      this.mostrarAlerta('Error', 'Por favor, seleccione un rol.');
      return;
    }

    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);

      if (userCredential && userCredential.user) {
        console.log('Datos a guardar:', {
          email: this.email,
          nombre: this.nombre,
          apellido: this.apellido,
          rol: this.rol,
        });

        await this.firestore.collection('usuarios').doc(userCredential.user.uid).set({
          email: this.email,
          nombre: this.nombre,
          apellido: this.apellido,
          rol: this.rol,
          fechaCreacion: new Date()
        });

        this.mostrarAlerta('Éxito', 'Tu cuenta ha sido creada exitosamente.');
        this.navCtrl.navigateForward('/login');
      }
    } catch (error: any) {
      console.error('Error al registrar:', error);
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