import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { ClaseService } from '../../services/clase.service'; // Asegúrate de la ruta correcta

@Component({
  selector: 'app-qr-a',
  templateUrl: './qr-a.page.html',
  styleUrls: ['./qr-a.page.scss'],
})
export class QrAPage implements OnInit {
  isSupported = false;
  claseEscaneada: any = null;  // Para almacenar la información de la clase

  constructor(
    private alertController: AlertController,
    private claseService: ClaseService
  ) {}

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert('Permiso denegado', 'Concede permiso a la cámara.');
      return;
    }
  
    const { barcodes } = await BarcodeScanner.scan();
    if (barcodes.length > 0) {
      try {
        console.log('Contenido del QR:', barcodes[0].rawValue); // Verifica qué datos llegan
        const datosClase = JSON.parse(barcodes[0].rawValue);
        console.log('Datos parseados:', datosClase); // Revisa cómo se parsean los datos
  
        this.claseEscaneada = datosClase; // Guardamos los datos en claseEscaneada
      } catch (error) {
        console.error('Error al parsear el QR:', error);
        this.presentAlert('Error', 'El código QR no contiene datos válidos.');
      }
    }
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Método para registrar la asistencia
  async marcarPresente() {
    if (this.claseEscaneada) {
      try {
        const claseId = this.claseEscaneada.codigo; // Usamos el código de la clase del QR
        const alumno = 'Nombre del Alumno'; // Ajusta esto según sea necesario

        await this.claseService.registrarAsistencia(claseId, alumno);
        this.presentAlert('Asistencia registrada', 'Se ha registrado tu asistencia.');
      } catch (error) {
        console.error('Error al registrar asistencia:', error);
        this.presentAlert('Error', 'No se pudo registrar la asistencia.');
      }
    }
  }
}