import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClaseService } from '../../services/clase.service';

@Component({
  selector: 'app-qr-d',
  templateUrl: './qr-d.page.html',
  styleUrls: ['./qr-d.page.scss'],
})
export class QrDPage implements OnInit {
  minutes: number = 5;
  seconds: number = 0;
  interval: any;

  valorQR: string = '';  // QR en formato string
  valorQRJSON: any = [];  // Datos en JSON para mostrar

  constructor(
    private navCtrl: NavController,
    private claseService: ClaseService
  ) {}

  ngOnInit() {
    this.startTimer();  // Iniciar temporizador
    this.cargarQR();  // Cargar datos del QR
  }

  cargarQR() {
    this.claseService.getClaseSeleccionada().subscribe((clase: any) => {
      if (clase) {
        this.valorQRJSON = [
          {
            nombre: clase.nombre,
            codigo: clase.codigo,
            profesor: clase.profesor,
            hora: clase.hora
          }
        ];
        this.valorQR = JSON.stringify(this.valorQRJSON);  // Convertir a string para QR
      }
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          clearInterval(this.interval);
        }
      }
    }, 1000);
  }

  cerrar() {
    const queryParams = { data: this.valorQR };  // Pasar datos como query params
    this.navCtrl.navigateForward(['/asistencia-clases'], { queryParams });
  }
}