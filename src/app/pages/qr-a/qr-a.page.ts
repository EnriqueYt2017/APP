import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { ClaseService } from 'src/app/services/clase.service';
import { Estudiante } from 'src/app/models/estudiante.model';
import { AuthService } from 'src/app/services/auth.service'
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-qr-a',
  templateUrl: './qr-a.page.html',
  styleUrls: ['./qr-a.page.scss'],
})
export class QrAPage implements OnInit {
  isSupported = false;
  claseEscaneada: any = null;
  estudiante: Estudiante | null = null;

  constructor(
    private alertController: AlertController,
    private claseService: ClaseService,
    private auth: AuthService
  ) {}
  latitud: number;
  longitud: number;
  isButtonDisabled: boolean = true;
  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    this.requestGoogle();
    if (!granted) {
      this.presentAlert('Permiso denegado', 'Concede permiso a la cámara.');
      return;
    }

    const { barcodes } = await BarcodeScanner.scan();
    if (barcodes.length > 0) {
      try {
        const rawValue = barcodes[0].rawValue;
        const datosClaseArray = JSON.parse(rawValue);
        if (Array.isArray(datosClaseArray) && datosClaseArray.length > 0) {
          this.claseEscaneada = datosClaseArray[0];
          this.estudiante = await this.auth.getEstudianteActual();
          if (this.estudiante === null) throw Error('No se pudo obtener datos del estudiante')
        } else {
          this.presentAlert('Error', 'El QR no contiene datos válidos.');
        }
      } catch (error) {
        console.error('Error al leer QR:', error);
        this.presentAlert('Error', 'El código QR no contiene datos válidos.');
      }
    }
  }

  async marcarPresente() {
    if (!this.claseEscaneada) {
      this.presentAlert('Error', 'No se ha escaneado ninguna clase.');
      return;
    }
  
    try {
      console.log('Clase escaneada:', this.claseEscaneada); // Verifica los datos de la clase
      console.log('Estudiante:', this.estudiante); // Verifica los datos del estudiante
  
      if (this.estudiante) {
        await this.claseService.registrarAsistencia(this.claseEscaneada.codigo, this.estudiante);
        this.presentAlert('Asistencia registrada', 'Se ha registrado tu asistencia.');
      } else {
        throw Error('Si')
      }
    } catch (error) {
      console.error('Error al registrar asistencia:', error);
      this.presentAlert('Error', 'No se pudo registrar la asistencia.');
    }
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async permisoGps(): Promise<boolean> {
    const { location } = await Geolocation.requestPermissions();
    return location == 'granted' || location === 'denied';
  }

  async presentAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  async obtenerCoordenadas() {
    const granted = await this.permisoGps();
    if (!granted) {
      this.presentAlert('Permiso denegado', 'Concede permiso a la ubicacion.');
      return;
    }
    const obtenerCoordenadas = await Geolocation.getCurrentPosition()
    this.latitud = obtenerCoordenadas.coords.latitude;
    this.longitud = obtenerCoordenadas.coords.longitude;
    this.verificarCondiciones();
  }
  verificarCondiciones() {
    const latitudStr = this.latitud.toString();
    const longitudStr = this.longitud.toString();

    const latitudRedondeada = parseFloat(latitudStr.split('.')[0] + '.' + latitudStr.split('.')[1].substring(0, 4));
    const longitudRedondeada = parseFloat(longitudStr.split('.')[0] + '.' + longitudStr.split('.')[1].substring(0, 4));

    const latitudMin = -33.6116;
    const latitudMax = -33.6118;
    const longitudMin = -70.5757;
    const longitudMax = -70.5858;

    if (latitudRedondeada >= latitudMin && latitudRedondeada <= latitudMax &&
        longitudRedondeada >= longitudMin && longitudRedondeada <= longitudMax) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  async requestGoogle(): Promise<boolean> {
    const { available } = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    if(!available){
      this.instalarModulo();
    };
    return available;
  }

  async instalarModulo(): Promise<void> {
    try {
      await BarcodeScanner.installGoogleBarcodeScannerModule();
    } catch (error) {
    }
    
  }
}